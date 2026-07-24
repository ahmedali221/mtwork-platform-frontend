import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-internal-server-error',
  imports: [CommonModule, RouterModule],
  templateUrl: './internal-server-error.html',
  styleUrl: './internal-server-error.css'
})
export class InternalServerError {


   reloadPage() {
    window.location.reload();
  }
}
