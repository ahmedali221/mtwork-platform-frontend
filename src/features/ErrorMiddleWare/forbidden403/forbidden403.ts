import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forbidden403',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './forbidden403.html',
  styleUrl: './forbidden403.css'
})
export class Forbidden403 {}
