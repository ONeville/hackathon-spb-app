import { MatCardModule } from '@angular/material/card';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Case } from 'src/app/core';

@Component({
  selector: 'app-case-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class CaseTableComponent implements OnInit {
  @Input() data: Case[];
  public displayedColumns: string[] = [
    'caseId',
    'createdDate',
    'status',
    'requestUserName',
    'servicesName',
    'cabin',
    'comments',
    'action',
  ];
  public dataSource: MatTableDataSource<Case>;
  public selection = new SelectionModel<Case>(true, []);

  public isShowFilterInput = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Case>(
      this.data.map(
        (r) =>
          ({
            ...r,
            requestUserName: r.requestUser.fullName,
            servicesName: r.services.name,
            cabin: r.host.cabinId,
          })
      )
    );

    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public showFilterInput(): void {
    this.isShowFilterInput = !this.isShowFilterInput;
    this.dataSource = new MatTableDataSource<Case>(this.data);
  }
}
