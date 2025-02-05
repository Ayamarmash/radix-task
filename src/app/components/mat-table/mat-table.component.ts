import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {PaginatorComponent} from "../paginator/paginator.component";

@Component({
  selector: 'app-mat-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    NgForOf,
    MatSort,
    MatSortHeader,
    NgIf,
    PaginatorComponent,
    NgClass,
    DatePipe,
  ],
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent {
  @Input() colsKeys: string[] = [];
  @Input() displayedColumns: any;
  @Input() dataSource: any[] = [];
  @Output() sortChanged = new EventEmitter<{ sortBy: string, order: string }>();

  activeSortColumn: string | null = null;
  order: 'asc' | 'desc' = 'asc';

  sortData(column: string): void {
    if (this.activeSortColumn === column) {
      this.order = this.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.activeSortColumn = column;
      this.order = 'asc';
    }
    this.sortChanged.emit({sortBy: this.activeSortColumn, order: this.order})
  }
}
