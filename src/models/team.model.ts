import { TeamMember } from "./team-member";

export interface Team {
  id: string;             // Unique team ID
  name: string;           // Team name
  description?: string;   // Optional description
  members: TeamMember[];      // Array of team members
  createdAt: Date;        // When the team was created
}
