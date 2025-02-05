import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    MatPaginator
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() disabled: boolean = true;
  @Input() pageSizeOptions: number[] = [];
  @Input() totalResultLength: number = 0;
  @Input() pageSize: number = 5;
  @Input() pageIndex: number = 1;
  @Output() pageChange = new EventEmitter<{ pageIndex: number, pageSize: number }>();

  handlePageEvent(event: PageEvent) {
    this.pageChange.emit({pageIndex: event.pageIndex, pageSize: event.pageSize});
  }
}
