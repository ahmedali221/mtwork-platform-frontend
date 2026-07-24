import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import {
  Project,
  ProjectCategory,
  ProjectDto,
  ProjectPriority,
  ProjectStatus,
  Task,
  TaskDto,
  BackendProjectDto,
  BackendProjectResponse
} from '../models/project';

/** Maps a raw backend project to the frontend Project model */
function mapBackendProject(raw: BackendProjectResponse): Project {
  const lang = localStorage.getItem('lang') || 'en';
  return {
    id:          String(raw.id),
    title:       lang === 'ar' ? (raw.nameAr || raw.nameEn || '') : (raw.nameEn || raw.nameAr || ''),
    description: raw.desc || '',
    status:      'todo',
    createdAt:   '',
    progress:    raw.progressPercentage ?? 0,
    // preserve originals for edit mode
    _nameAr: raw.nameAr,
    _nameEn: raw.nameEn,
    _projectTeams: raw.projectTeams ?? [],
  } as Project & Record<string, unknown>;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly apiService = inject(ApiService);
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  public projects$ = this.projectsSubject.asObservable();


  /** ================================
   *  PROJECT CRUD OPERATIONS
   *  ================================ */

  /**
   * Get all projects
   * Backend: GET /api/Project/GetAll → { totalRows, item: BackendProjectResponse[] }
   */
  getProjects(params?: any): Observable<Project[]> {
    return this.apiService.get<any>('Project/GetAll', params).pipe(
      map(response => {
        let raw: BackendProjectResponse[] = [];
        if (Array.isArray(response))          raw = response;
        else if (Array.isArray(response?.item))   raw = response.item;
        else if (Array.isArray(response?.result)) raw = response.result;
        else if (Array.isArray(response?.data))   raw = response.data;
        return raw.map(mapBackendProject);
      }),
      tap(projects => this.projectsSubject.next(projects)),
      catchError(() => of([]))
    );
  }

  /**
   * Get project by ID
   * Backend: GET /api/Project/Get?ProjectId=X
   */
  getProjectById(id: string | number): Observable<Project> {
    return this.apiService.get<any>('Project/Get', { ProjectId: id }).pipe(
      map(raw => mapBackendProject(raw as BackendProjectResponse)),
      catchError(err => { throw err; })
    );
  }

  /**
   * Create a new project
   * Backend: POST /api/Project/Create
   * Payload MUST use nameAr / nameEn / desc / createUser / progressPercentage / projectTeamIds
   */
  createProject(dto: BackendProjectDto): Observable<Project> {
    return this.apiService.post<BackendProjectDto, any>('Project/Create', dto).pipe(
      map(raw => mapBackendProject(raw as BackendProjectResponse)),
      tap(created => {
        const current = this.projectsSubject.value;
        this.projectsSubject.next([...current, created]);
      })
    );
  }

  // NOTE: createProjectForm / updateProjectForm removed — backend uses JSON, not multipart.

  /**
   * Update a project
   * Backend: POST /api/Project/Update
   * Payload MUST include id (integer) + same fields as Create
   */
  updateProject(id: string, dto: Partial<BackendProjectDto> | any): Observable<Project> {
    const payload: any = { id: Number(id), ...dto };
    return this.apiService.post<any, any>('Project/Update', payload).pipe(
      map(raw => mapBackendProject(raw as BackendProjectResponse)),
      tap(updated => {
        const current = this.projectsSubject.value;
        const index = current.findIndex(p => p.id === id);
        if (index !== -1) {
          current[index] = updated;
          this.projectsSubject.next([...current]);
        }
      })
    );
  }

  updateProjectStatus(id: string, status: ProjectStatus): Observable<Project> {
    return this.updateProject(id, { status });
  }

  /**
   * Delete a project
   * Backend: DELETE Project/Delete?id=X
   */
  deleteProject(id: string | number): Observable<void> {
    return this.apiService.delete<void>(`Project/Delete?id=${id}`).pipe(
      tap(() => {
        const current = this.projectsSubject.value;
        this.projectsSubject.next(current.filter(p => p.id !== id.toString()));
      })
    );
  }

  deleteProjects(ids: string[]): Observable<void> {
    // Delete projects one by one since backend does not have bulk delete
    const deleteObs = ids.map(id => this.deleteProject(id));
    return new Observable(observer => {
      Promise.all(deleteObs.map(o => o.toPromise())).then(() => {
        observer.next();
        observer.complete();
      }).catch(err => observer.error(err));
    });
  }

  /** ================================
   *  TASK OPERATIONS
   *  ================================ */

  /** Maps string status to the numeric statusId the backend expects */
  // Backend lookup: GET /Lookup/GetAllUserTaskStatus → only 4 statuses exist
  // 1=To Do, 2=In Progress, 3=Need Review, 4=Done
  private static readonly TASK_STATUS_ID: Record<string, number> = {
    'todo': 1, 'pending': 1,
    'in-progress': 2,
    'on-hold': 3,
    'done': 4, 'completed': 4, 'cancelled': 4,
  };
  private static readonly TASK_STATUS_STR: Record<number, ProjectStatus> = {
    1: 'todo', 2: 'in-progress', 3: 'on-hold', 4: 'done',
  };

  /** Maps string priority to the numeric priorityId the backend expects */
  private static readonly TASK_PRIORITY_ID: Record<string, number> = {
    'low': 1, 'medium': 2, 'high': 3, 'urgent': 4
  };
  private static readonly TASK_PRIORITY_STR: Record<number, ProjectPriority> = {
    1: 'low', 2: 'medium', 3: 'high', 4: 'urgent'
  };

  /**
   * Maps a raw backend task object to the frontend Task model.
   * Swagger response fields: id, title, description, priority (int),
   * statusId (int), projectId, assignedUserId, assignedUserName, dueDate, createUser
   */
  private mapBackendTask(raw: any): Task {
    const statusRaw   = raw.statusId ?? raw.status ?? 1;
    const priorityRaw = raw.priority ?? raw.priorityId ?? 2;   // API uses "priority" not "priorityId"

    const status: ProjectStatus = typeof statusRaw === 'number'
      ? (ProjectService.TASK_STATUS_STR[statusRaw]   ?? 'todo')
      : (statusRaw   as ProjectStatus) || 'todo';
    const priority: ProjectPriority = typeof priorityRaw === 'number'
      ? (ProjectService.TASK_PRIORITY_STR[priorityRaw] ?? 'medium')
      : (priorityRaw as ProjectPriority) || 'medium';

    // Filter out .NET DateTime.MinValue ("0001-01-01...") — treat as no date
    const sanitiseDate = (d: any): string | undefined => {
      if (!d) return undefined;
      const s = String(d);
      if (s.startsWith('0001-') || s.startsWith('1/1/0001') || s === '') return undefined;
      return s;
    };

    return {
      id:          String(raw.id ?? ''),
      projectId:   String(raw.projectId ?? ''),
      title:       raw.title ?? raw.summary ?? raw.name ?? '(no title)',
      summary:     raw.title ?? raw.summary ?? '',
      description: raw.description ?? '',
      status,
      priority,
      assigneeId:  raw.assignedUserId ? String(raw.assignedUserId) : undefined,
      reporterId:  raw.reporterId     ? String(raw.reporterId)     : undefined,
      dueDate:     sanitiseDate(raw.dueDate),
      createdAt:   sanitiseDate(raw.createDate ?? raw.createdAt) ?? '',
      updatedAt:   raw.updateDate     ?? raw.updatedAt ?? undefined,
    };
  }

  /**
   * `assignedUserId` scopes results to a single user's own tasks — used for
   * the Employee role, which should only see tasks assigned to them
   * (swagger: UserTask/GetAll supports `AssignedUserId`).
   */
  getTasksByProject(projectId: string, assignedUserId?: string): Observable<Task[]> {
    const params: Record<string, string> = { ProjectId: projectId };
    if (assignedUserId) params['AssignedUserId'] = assignedUserId;
    return this.apiService.get<any>('UserTask/GetAll', params).pipe(
      map(response => {
        let raw: any[] = [];
        if (Array.isArray(response))          raw = response;
        else if (Array.isArray(response?.item))   raw = response.item;
        else if (Array.isArray(response?.data))   raw = response.data;
        else if (Array.isArray(response?.result)) raw = response.result;
        return raw.map(t => this.mapBackendTask(t));
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Create a task.
   * Swagger schema: { id:0, title, description, priority(int), projectId(int),
   *   statusId(int), assignedUserId, dueDate(ISO), createUser,
   *   taskAttachments:[], taskHistories:[] }
   */
  createTask(projectId: string, dto: TaskDto | any): Observable<Task> {
    const titleVal    = (dto.title || dto.summary || dto.name || '').trim();
    const statusIdVal = ProjectService.TASK_STATUS_ID[dto.status as string] ?? 1;
    const priorityVal = ProjectService.TASK_PRIORITY_ID[dto.priority as string] ?? 2;
    const projNum     = parseInt(projectId, 10);
    const createUser  = (
      localStorage.getItem('userId') ??
      localStorage.getItem('userName') ??
      localStorage.getItem('email') ?? ''
    ).trim();

    // assignedUserId: use selected assignee, or fall back to current user (backend may require it)
    const assignedUserId = (dto.assigneeId && String(dto.assigneeId).trim())
      ? String(dto.assigneeId).trim()
      : createUser;

    // Full payload matching the exact Swagger schema — send ALL fields to avoid model validation errors
    const payload: any = {
      id:               0,
      readOnly:         false,
      title:            titleVal,
      description:      (dto.description || ''),   // send empty string, not null
      priority:         priorityVal,
      projectId:        isNaN(projNum) ? 0 : projNum,
      statusId:         statusIdVal,
      assignedUserId:   assignedUserId,
      assignedUserName: '',
      profileImage:     '',
      createUser:       createUser,
      taskAttachments:  [],
      taskHistories:    [],
    };

    if (dto.dueDate && String(dto.dueDate).trim()) {
      try { payload.dueDate = new Date(dto.dueDate).toISOString(); } catch { /* skip */ }
    }

    return this.apiService.post<any, any>('UserTask/Create', payload).pipe(
      map(raw => this.mapBackendTask((raw as any)?.data ?? raw ?? {})),
      catchError(err => { throw err; })
    );
  }

  /**
   * Update a task.
   * Backend schema (UserTask/Update — same shape as Create):
   *   { id(int), title, description, priority(int), projectId(int),
   *     statusId(int), assignedUserId, dueDate(ISO|null), createUser,
   *     taskAttachments:[], taskHistories:[] }
   */
  updateTask(taskId: string, dto: Partial<TaskDto> | any): Observable<Task> {
    const idNum      = parseInt(taskId, 10);
    const projNum    = parseInt(String(dto.projectId ?? '0'), 10);
    const createUser = (
      localStorage.getItem('userId') ??
      localStorage.getItem('userName') ??
      localStorage.getItem('email') ?? ''
    ).trim();

    // assignedUserId: task's assignee → current user — NEVER null or empty (required by backend)
    const rawAssignee    = dto.assigneeId ? String(dto.assigneeId).trim() : '';
    const assignedUserId = rawAssignee || createUser || '';

    const statusId = ProjectService.TASK_STATUS_ID[dto.status as string]    ?? 1;
    const priority = ProjectService.TASK_PRIORITY_ID[dto.priority as string] ?? 2;

    // Full schema — mirrors UserTask/Create to avoid 400 on missing required fields
    const payload: any = {
      id:               isNaN(idNum)   ? 0 : idNum,
      readOnly:         false,
      title:            (dto.title || dto.summary || dto.name || '').trim(),
      description:      dto.description ?? '',
      priority,
      projectId:        isNaN(projNum) ? 0 : projNum,
      statusId,
      assignedUserId,
      assignedUserName: '',
      profileImage:     '',
      createUser,
      taskAttachments:  [],
      taskHistories:    [],
    };

    // Only include dueDate when a valid non-minvalue date exists — omit entirely otherwise.
    // createTask pattern: omit the field; don't send null (backend DateTime may be non-nullable).
    if (dto.dueDate) {
      const dateStr = String(dto.dueDate).trim();
      if (dateStr && !dateStr.startsWith('0001-') && !dateStr.startsWith('1/1/0001')) {
        // Keep existing ISO string as-is; only append Z if no timezone suffix present
        payload.dueDate = /[Zz]|[+-]\d{2}:\d{2}$/.test(dateStr) ? dateStr : dateStr + 'Z';
      }
      // else: omit — bad date, let backend use its default
    }
    // else: omit dueDate entirely (backend keeps existing value or uses default)

    return this.apiService.post<any, any>('UserTask/Update', payload).pipe(
      map(raw => this.mapBackendTask((raw as any)?.data ?? raw ?? { ...payload })),
      catchError(err => { throw err; })
    );
  }

  /** Change task status via dedicated ChangeStatus endpoint: { taskId, statusId } */
  changeTaskStatus(task: Task, newStatus: ProjectStatus): Observable<void> {
    const taskId   = parseInt(task.id, 10);
    const statusId = ProjectService.TASK_STATUS_ID[newStatus] ?? 1;
    return this.apiService.post<any, any>('UserTask/ChangeStatus', { taskId, statusId }).pipe(
      map(() => undefined as void),
      catchError(err => {
        console.error('[UserTask/ChangeStatus] error:', (err as any)?.error ?? err);
        throw err;
      })
    );
  }

  deleteTask(taskId: string | number): Observable<void> {
    return this.apiService.delete<void>(`UserTask/Delete?id=${taskId}`);
  }

  /** ================================
   *  PROJECT CATEGORIES
   *  ================================ */

  getAllCategories(): Observable<ProjectCategory[]> {
    return this.apiService.get<any>('Lookup/GetAllProjectTypes').pipe(
      map(response => response?.item || response || []),
      catchError(() => of([]))
    );
  }

  getCategoryById(id: string): Observable<ProjectCategory> {
    return this.apiService.get<ProjectCategory>('Lookup/GetAllProjectTypes', { id });
  }

  /** ================================
   *  FILTERING & SORTING (client-side)
   *  ================================ */

  searchProjects(query: string): Observable<Project[]> {
    return this.projects$.pipe(
      map(projects =>
        projects.filter(p =>
          p.title?.toLowerCase().includes(query.toLowerCase()) ||
          p.description?.toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  }

  sortProjects(projects: Project[], field: keyof Project, direction: 'asc' | 'desc'): Project[] {
    return [...projects].sort((a, b) => {
      const valA = a[field]; const valB = b[field];
      if (typeof valA === 'string' && typeof valB === 'string') {
        const cmp = valA.localeCompare(valB);
        return direction === 'asc' ? cmp : -cmp;
      }
      if (field === 'dueDate' || field === 'createdAt' || field === 'updatedAt') {
        const cmp = new Date((a[field] as string) || 0).getTime() - new Date((b[field] as string) || 0).getTime();
        return direction === 'asc' ? cmp : -cmp;
      }
      return 0;
    });
  }
}
