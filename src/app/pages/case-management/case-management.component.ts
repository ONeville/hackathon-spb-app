import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CabinManagementService } from 'src/app/core/services/cabin.service';
import { switchMap } from 'rxjs';
import { CaseFormComponent } from './form/form.component';
import { CaseTableComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Case } from 'src/app/core';

@Component({
  selector: 'app-case-management',
  standalone: true,
  imports: [
    CommonModule,
    CaseTableComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.scss'],
})
export class CaseManagementComponent {
  dialog = inject(MatDialog);
  cabinService = inject(CabinManagementService);
  isShowFilterInput = false;
  cases: Case[] = [
    {
      createdDate: '2022-08-20',
      lastUpdateDate: '2022-08-20',
      requestUser: {
        fullName: 'Jacqueline Terry',
        phone: '302-245-0177',
        id: '1',
      },
      services: {
        name: 'MH',
        organization: 'FSCAA',
      },
      host: {
        cabinId: '12',
        site: 'TX-Dallas-01',
        loaction: 'Dalls',
      },
      status: 'PROGRESS',
      comments: 'Elderly',
      id: '0',
      caseId: '1125',
    },
  ];

  addNew() {
    const ref = this.dialog.open(CaseFormComponent, {
      width: '650px',
    });

    ref
      .afterClosed()
      .pipe(
        switchMap((d) => {
          return this.cabinService.addNew({
            ...d.data,
            id: Date.now() + '-' + Math.round(Math.random() * 1e9),
          });
        })
      )
      .subscribe((res) => {
        console.log('Add - ', res);
      });
  }

  public masterToggle(): void {}

  public applyFilter(event: Event): void {}

  public showFilterInput(): void {
    this.isShowFilterInput = !this.isShowFilterInput;
  }
}
