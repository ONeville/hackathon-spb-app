import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cabin, Case } from 'src/app/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-case',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class CaseFormComponent {
  dialogRef = inject(MatDialogRef<CaseFormComponent>);
  case: Case = {
    createdDate: '',
    lastUpdateDate: '',
    requestUser: {
      fullName: '',
      phone: '',
      id: '',
    },
    services: {
      name: '',
      organization: '',
    },
    host: {
      cabinId: '',
      site: '',
      loaction: '',
    },
    status: '',
    comments: '',
    id: '',
    caseId: '',
  };

  submitForm() {
    const payload = {
      ...this.case,
      createdDate: new Date().toDateString(),
      lastUpdateDate: new Date().toDateString(),
    };
    this.dialogRef.close({
      data: payload,
    });
  }
}
