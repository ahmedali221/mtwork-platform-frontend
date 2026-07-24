import { TeamMember } from "./team-member";

// Repeat type ID ↔ string mappings (used in service + components)
export const REPEAT_ID_TO_TYPE: Record<number, string> = {
  0: 'None',
  1: 'Daily',
  2: 'Weekly',
  3: 'Monthly'
};
export const REPEAT_TYPE_TO_ID: Record<string, number> = {
  'None': 0,
  'Daily': 1,
  'Weekly': 2,
  'Monthly': 3
};

export interface Meeting {
  id: number;
  title: string;

  // ── Actual API field names ────────────────────────────────────────
  description?: string | null;           // API sends "description" (not meetingDescription)
  repeatId?: number;                     // 0=None, 1=Daily, 2=Weekly, 3=Monthly
  meetingUserIds?: (number | string)[] | null;  // API sends "meetingUserIds"
  meetingUsers?: TeamMember[] | null;    // API sends "meetingUsers"
  location?: string | null;
  createUser?: string;
  readOnly?: boolean;

  // ── Mapped / compatibility fields (set by MeetingsService.mapMeeting) ──
  meetingDescription?: string;           // mapped from description
  repeatType?: string;                   // mapped from repeatId → "None"|"Daily"|"Weekly"|"Monthly"
  status?: string;                       // "Scheduled"|"Cancelled"|"Completed"
  participants?: TeamMember[] | null;    // mapped from meetingUsers

  // ── Time fields ───────────────────────────────────────────────────
  meetingDate?: string;                  // ISO date from backend
  startTime: string;                     // ISO datetime or "HH:MM"
  endTime: string;                       // ISO datetime or "HH:MM"
  meetingLink: string;
}
