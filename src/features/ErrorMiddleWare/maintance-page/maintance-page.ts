import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-maintance-page',
  imports: [CommonModule,RouterModule],
  templateUrl: './maintance-page.html',
  styleUrl: './maintance-page.css'
})
export class MaintancePage {
estimatedTime: string = '2 hours'; // ⬅️ ممكن تخليها dynamic من API
 reloadPage(): void {
    window.location.reload();    
   }
  
  }