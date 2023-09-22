import { MatInputModule } from '@angular/material/input';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cabin } from 'src/app/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-cabin',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class CabinFormComponent {
  dialogRef = inject(MatDialogRef<CabinFormComponent>);
  cabin: Cabin = {
    id: '',
    cabinId: 0,
    location: '',
    site: '',
    city: '',
    zipCode: 0,
  };

  submitForm() {
    this.dialogRef.close({
      data: this.cabin,
    });
  }
}
