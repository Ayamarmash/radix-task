import {Component, OnInit} from '@angular/core';
import {MatTableComponent} from "../../../components/mat-table/mat-table.component";
import {BaseReservationsPage} from "../base-reservations-page";
import {ReservationsService} from "../../../services/reservations-service.service";
import {GridComponent} from "../../../components/grid/grid.component";
import {PaginatorComponent} from "../../../components/paginator/paginator.component";
import {ColDef, ICellRendererParams} from "ag-grid-community";
import {DatePipe, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {DatePickerComponent} from "../../../components/date-picker/date-picker.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {AgGridAngular} from "ag-grid-angular";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-grid-reservations-page',
  standalone: true,
  imports: [
    MatTableComponent,
    GridComponent,
    PaginatorComponent,
    NgIf,
    MatProgressSpinner,
    DatePickerComponent,
    MatSlideToggle,
    FormsModule,
    AgGridAngular,
    MatButton,
  ],
  templateUrl: './grid-reservations-page.component.html',
  styleUrl: './grid-reservations-page.component.css'
})
export class GridReservationsPageComponent extends BaseReservationsPage implements OnInit {
  private datePipe = new DatePipe('en-US');

  displayedColsGrid: ColDef[] = [
    {field: 'id', headerName: 'ID', width:100},
    {field: 'reservationId', headerName: 'Reservation ID', width:130, valueFormatter: (params) => params.value || '-'},
    {
      field: 'urgent', headerName: 'Urgent',
      width: 100,
      valueFormatter: (params) => params.value || '-',
      cellRenderer: (params: ICellRendererParams) => {
        return params.value
          ? '<span style="color: red;">Yes</span>'
          : '<span>No</span>';
      }
    },
    {field: 'status', headerName: 'Status', width:100, valueFormatter: (params) => params.value || '-'},
    {field: 'type', headerName: 'Type', width:120, valueFormatter: (params) => params.value || '-'},
    {
      field: 'scheduled_pickup_time',
      headerName: 'Scheduled Pickup Time',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '-',
    },
    {
      field: 'pickup_time',
      headerName: 'Pickup Time',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '-',
    },
    {
      field: 'dropoff_time',
      headerName: 'Dropoff Time',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '-',
    },
    {
      field: 'cancel_time',
      headerName: 'Cancel Time',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '-',
    },
    {
      field: 'note', headerName: 'Note',
      width:400,
      wrapText: true,
      cellRenderer: (params: any) => {
        return this.formatText(params.value);
      },
    },
    {field: 'distance', headerName: 'Distance', valueFormatter: (params) => params.value || '-'},
    {field: 'duration', headerName: 'Duration', valueFormatter: (params) => params.value || '-'},
    {
      field: 'created', headerName: 'Created',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '-',
    }
  ];

  constructor(_reservationsService: ReservationsService) {
    super(_reservationsService);
  }

  async ngOnInit() {
    await this.fetchReservations();
  }

  formatText(text: string): string {
    if (!text) return '';
    return text
      .split('\r\n')
      .filter(line => line.trim() !== '')
      .map(line => `● ${line}`)
      .join(`<br>`);
  }
}
