import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from '../../../services/project-service';
import { Task, TaskDto, ProjectStatus } from '../../../models/project';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly svc = inject(ProjectService);

  getByProject(projectId: string, assignedUserId?: string): Observable<Task[]> {
    return this.svc.getTasksByProject(projectId, assignedUserId);
  }

  create(projectId: string, dto: TaskDto): Observable<Task> {
    return this.svc.createTask(projectId, dto);
  }

  update(taskId: string, dto: Partial<TaskDto>): Observable<Task> {
    return this.svc.updateTask(taskId, dto as any);
  }

  changeStatus(task: Task, status: ProjectStatus): Observable<void> {
    return this.svc.changeTaskStatus(task, status);
  }

  delete(taskId: string): Observable<void> {
    return this.svc.deleteTask(taskId);
  }
}
