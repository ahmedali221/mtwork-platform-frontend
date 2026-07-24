import {
  Component, inject, signal, computed,
  ChangeDetectionStrategy, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../../../services/user.service';
import { UserDto, UserTypeId } from '../../../../models/user.model';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule, MatIconModule],
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementComponent implements OnInit {
  private readonly userService = inject(UserService);

  users       = signal<UserDto[]>([]);
  isLoading   = signal(true);
  errorKey    = signal('');
  searchQuery = signal('');

  /** Expose enum to template */
  readonly UserTypeId = UserTypeId;

  filteredUsers = computed<UserDto[]>(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.users();
    return this.users().filter(u =>
      (`${u.firstName} ${u.lastName}`).toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    );
  });

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.isLoading.set(true);
    this.errorKey.set('');
    this.userService.getAll().subscribe({
      next: (list) => {
        this.users.set(list ?? []);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorKey.set('admin.users.errors.load');
        this.isLoading.set(false);
      },
    });
  }

  onSearch(value: string): void {
    this.searchQuery.set(value);
  }

  userTypeKey(typeId: number): string {
    switch (typeId) {
      case UserTypeId.Employee:   return 'admin.users.userTypes.1';
      case UserTypeId.Contractor: return 'admin.users.userTypes.2';
      case UserTypeId.Business:   return 'admin.users.userTypes.3';
      default:                    return 'admin.users.userTypes.1';
    }
  }
}
