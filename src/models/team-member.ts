export interface TeamMember {
  id: string;             // Unique member ID
  name: string;           // Full name
  email: string;          // Email address
  role: string;           // Role in the team (e.g., Developer, Designer)
  teamId?: string;        // Optional: ID of the team the member belongs to
  avatar?: string;
  countryFlag?: string;
  designation?: string;

}