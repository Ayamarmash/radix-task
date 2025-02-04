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
import {FormatColumnPipe} from "../../pipes/format-column.pipe";
import {PaginatorComponent} from "../paginator/paginator.component";
import {FormatDataPipe} from "../../pipes/format-data.pipe";

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
    FormatColumnPipe,
    MatSortHeader,
    NgIf,
    PaginatorComponent,
    FormatDataPipe,
    NgClass,
    DatePipe
  ],
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];
  @Output() sortChanged = new EventEmitter<{ sortBy: string, order: string }>();

  activeSortColumn: string | null = null;
  order: 'asc' | 'desc' = 'asc';

  sortData(column: string): void {
    console.log(column)
    if (this.activeSortColumn === column) {
      this.order = this.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.activeSortColumn = column;
      this.order = 'asc';
    }
    this.sortChanged.emit({sortBy: this.activeSortColumn, order: this.order})
  }
}
