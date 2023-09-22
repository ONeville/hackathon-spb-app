import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-case-management',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.scss']
})
export class CaseManagementComponent {

}
