import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamsService } from '../../../../../services/teams';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-invite-members-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './invite-members-dialog.html',
  styleUrl: './invite-members-dialog.css'
})
export class InviteMembersDialogComponent {
  private dialogRef    = inject(MatDialogRef<InviteMembersDialogComponent>);
  private teamsService = inject(TeamsService);

  emails: string[]  = [];
  inputEmail        = '';
  sending           = false;
  sendError         = signal<string | null>(null);
  sendSuccess       = signal(false);

  get buttonLabel(): string {
    if (this.sending) return 'Sending…';
    const n = this.emails.length;
    if (n === 0) return 'Invite Member';
    return `Add ${n} Member${n > 1 ? 's' : ''}`;
  }

  addEmailFromInput(): void {
    const email = this.inputEmail.trim().toLowerCase();
    if (!email || !this.isValidEmail(email) || this.emails.includes(email)) return;
    this.emails.push(email);
    this.inputEmail = '';
    this.sendError.set(null);
  }

  removeEmail(index: number): void {
    this.emails.splice(index, 1);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this.addEmailFromInput();
      return;
    }
    if (event.key === 'Backspace' && !this.inputEmail && this.emails.length > 0) {
      this.emails.pop();
    }
  }

  submitInvite(): void {
    this.addEmailFromInput();
    if (this.emails.length === 0) return;

    this.sending = true;
    this.sendError.set(null);

    let completed = 0;
    let errors    = 0;
    const total   = this.emails.length;

    this.emails.forEach(email => {
      this.teamsService.inviteMember(email).subscribe({
        next: result => {
          if (!result.success) errors++;
          completed++;
          if (completed === total) this.onSendComplete(errors, total);
        },
        error: () => {
          errors++;
          completed++;
          if (completed === total) this.onSendComplete(errors, total);
        }
      });
    });
  }

  private onSendComplete(errors: number, total: number): void {
    this.sending = false;
    if (errors === 0) {
      this.sendSuccess.set(true);
      this.emails = [];
      setTimeout(() => this.dialogRef.close(true), 1800);
    } else {
      this.sendError.set(`${errors} of ${total} invitation${total > 1 ? 's' : ''} failed. Please try again.`);
    }
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  close(): void {
    this.dialogRef.close();
  }
}
