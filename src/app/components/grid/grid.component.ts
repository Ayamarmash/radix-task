import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import {ClientSideRowModelModule, ColDef, ColumnApiModule, SortChangedEvent} from 'ag-grid-community'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    AgGridAngular,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: ColDef[] = [];
  @Output() sortChanged = new EventEmitter<{ sortBy: string, order: 'asc' | 'desc' }>();

  modules = [ClientSideRowModelModule, ColumnApiModule];

  activeSortColumn: string ='';
  order: 'asc' | 'desc' = 'asc';
  gridApi: any;

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  sortData(event: SortChangedEvent) {
    const colState = this.gridApi.getColumnState();
    const activeSortCols = colState.filter((col: { colId: string, sort: string | null }) => {
      return col.sort !== null
    });
    if (activeSortCols.length > 0) {
      this.activeSortColumn = activeSortCols[0].colId || '';
      this.order = activeSortCols[0].sort === 'asc' ? 'asc' : 'desc';
      this.sortChanged.emit({sortBy: this.activeSortColumn, order: this.order})
    } else {
      this.activeSortColumn = ''
      this.sortChanged.emit({sortBy: this.activeSortColumn, order: this.order})
    }
  }

  getRowHeight(params: any) {
    const noteContent = params.data.note || '';
    const lineCount = noteContent.split('\n').length;
    return 80 + lineCount * 20;
  }

}
