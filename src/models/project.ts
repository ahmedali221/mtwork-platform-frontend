/**
 * Project Model
 * Represents a project in the TichPro (MTWORK) system
 */
export interface Project {
  id: string;
  title: string;
  summary?: string;
  description?: string;
  status: ProjectStatus;
  managerId?: string;
  assigneeIds?: string[];
  priority?: ProjectPriority;
  categoryId?: string;
  dueDate?: string; // ISO date string
  createdAt: string;
  updatedAt?: string;
    projectIcon?: string;
  projectImage?: File | null;

  // Relations
  category?: ProjectCategory;
  tasks?: Task[];
  attachments?: ProjectAttachment[];
  comments?: ProjectComment[];
  progress?: number; // e.g., 0-100
}

/**
 * Task Model
 * Represents a single task within a project
 */
export interface Task {
  id: string;
  projectId: string;
  title: string;
  summary?: string;
  description?: string;
  categoryId?: string;
  assigneeId?: string;
  reporterId?: string;
  priority: ProjectPriority;
  status: ProjectStatus;
  dueDate?: string;
  createdAt: string;
  updatedAt?: string;

  // Relations
  category?: ProjectCategory;
  assignee?: UserSummary;
  reporter?: UserSummary;
}

/**
 * Lightweight user model (used in assignee/reporter)
 */
export interface UserSummary {
  id: string;
  name: string;
  avatarUrl?: string;
  role?: string;
}

/**
 * Project Status
 */
export type ProjectStatus =
  | 'todo'
  | 'pending'
  | 'in-progress'
  | 'done'
  | 'completed'
  | 'cancelled'
  | 'on-hold';

/**
 * Project Priority
 */
export type ProjectPriority = 'low' | 'medium' | 'high' | 'urgent';

/**
 * Project Category
 */
export interface ProjectCategory {
  id: string;
  title: string;
  description?: string;
  color?: string;
  icon?: string;
  createdAt: string;
  updatedAt?: string;
}

/**
 * Project Attachment
 */
export interface ProjectAttachment {
  id: string;
  projectId: string;
  filename: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
  uploadedBy: string;
  uploadedAt: string;
}

/**
 * Project Comment
 */
export interface ProjectComment {
  id: string;
  projectId: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
}

/**
 * Repetition Config
 */
export interface ProjectRepeat {
  enabled: boolean;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  endDate?: string;
  daysOfWeek?: number[]; // 0-6 (Sunday-Saturday)
  dayOfMonth?: number; // 1-31
}

/**
 * Create/Update DTO (frontend form model)
 */
export interface ProjectDto {
  title: string;
  summary?: string;
  description?: string;
  status?: ProjectStatus;
  assigneeIds?: string[];
  managerId?: string;
  priority?: ProjectPriority;
  categoryId?: string;
  dueDate?: string;
  tags?: string[];
  estimatedHours?: number;
  repeat?: ProjectRepeat;
  projectIcon?: string;
  projectImage?: File | null;
  /** Team IDs to assign — maps to projectTeamIds in the API */
  teamIds?: number[];
}

/**
 * Backend DTO — matches the exact Swagger schema for POST /api/Project/Create & Update
 * Field names MUST match the API exactly — do not rename.
 */
export interface BackendProjectDto {
  id: number;               // 0 for create, actual ID for update
  nameAr: string;           // Project name (Arabic)
  nameEn: string;           // Project name (English)
  desc: string;             // Description
  createUser: string;       // Username / userId of creator
  progressPercentage: number;
  projectTeamIds: number[]; // Array of Team IDs (integers)
  projectTeams?: BackendProjectTeam[];
}

/**
 * Backend team object nested inside BackendProjectDto
 */
export interface BackendProjectTeam {
  id: number;
  projectId: number;
  teamId: number;
  teamName: string;
}

/**
 * Raw project object returned by GET /api/Project/GetAll & Get
 * Maps to the frontend Project interface via mapBackendProject()
 */
export interface BackendProjectResponse {
  id: number;
  nameAr: string;
  nameEn: string;
  desc?: string;
  createUser?: string;
  progressPercentage?: number;
  projectTeams?: BackendProjectTeam[];
}

/**
 * Task DTO
 */
export interface TaskDto {
  id?: string;
  projectId: string;
  title: string;
  summary?: string;
  description?: string;
  status?: ProjectStatus;
  priority?: ProjectPriority;
  assigneeId?: string;
  dueDate?: string;
}

/**
 * Filters, Sorting, and Statistics
 */
export interface ProjectFilterOptions {
  status?: ProjectStatus[];
  priority?: ProjectPriority[];
  assigneeIds?: string[];
  categoryId?: string[];
  dueDateFrom?: string;
  dueDateTo?: string;
  search?: string;
}

export interface ProjectSortOptions {
  field: keyof Project;
  direction: 'asc' | 'desc';
}

export interface ProjectStatistics {
  total: number;
  byStatus: Record<ProjectStatus, number>;
  byPriority: Record<ProjectPriority, number>;
  overdue: number;
  dueToday: number;
  dueThisWeek: number;
}

/**
 * Project View Mode
 */
export type ProjectViewMode =
  | 'table'
  | 'list'
  | 'board'
  | 'calendar'
  | 'gantt';

/**
 * Kanban Board Column
 */
export interface BoardColumn {
  id: string;
  title: string;
  status: ProjectStatus;
  tasks: Task[];
  limit?: number;
  color?: string;
}
