import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthenticatedHeaderComponent } from './../authenticated-header/authenticated-header';
import { SidebarComponent } from '../sidebar/sidebar';
import { SessionService } from '../../../services/session.service';
import { ChatWidgetComponent } from '../../../features/dashboard/chat/chat-widget';
import { SidebarService } from '../../../services/sidebar';

@Component({
  selector: 'app-authenticated-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatSidenavModule,
    MatDialogModule,
    MatSnackBarModule,
    AuthenticatedHeaderComponent,
    ChatWidgetComponent,
  ],
  templateUrl: './authenticated-layout.html',
  styleUrls: ['./authenticated-layout.css']
})
export class AuthenticatedLayoutComponent implements OnInit, OnDestroy {
  private sessionService = inject(SessionService);
  readonly sidebarService = inject(SidebarService);

  isSidebarOpen = true;

  ngOnInit(): void {
    // Start token expiry + idle monitoring for the entire dashboard session
    this.sessionService.startMonitoring();
  }

  ngOnDestroy(): void {
    // Clean up timers when leaving the dashboard (e.g. logout)
    this.sessionService.stopMonitoring();
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onToggleSidebar(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }
}
