import {Component, OnInit} from '@angular/core';
import {MatTableComponent} from "../../../components/mat-table/mat-table.component";
import {BaseReservationsPage} from "../base-reservations-page";
import {ReservationsService} from "../../../services/reservations-service.service";
import {GridComponent} from "../../../components/grid/grid.component";
import {PaginatorComponent} from "../../../components/paginator/paginator.component";
import {ColDef, ICellRendererParams} from "ag-grid-community";
import {DatePipe, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-grid-reservations-page',
  standalone: true,
  imports: [
    MatTableComponent,
    GridComponent,
    PaginatorComponent,
    NgIf,
    MatProgressSpinner,
  ],
  templateUrl: './grid-reservations-page.component.html',
  styleUrl: './grid-reservations-page.component.css'
})
export class GridReservationsPageComponent extends BaseReservationsPage implements OnInit {
  private datePipe = new DatePipe('en-US');

  displayedColsGrid: ColDef[] = [
    {field: 'id', headerName: 'ID'},
    {field: 'reservationId', headerName: 'Reservation ID'},
    {field: 'status', headerName: 'Status'},
    {field: 'type', headerName: 'Type'},
    {
      field: 'scheduled_pickup_time',
      headerName: 'Scheduled Pickup Time',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '',
    },
    {
      field: 'pickup_time',
      headerName: 'Pickup Time',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '',
    },
    {
      field: 'dropoff_time',
      headerName: 'Dropoff Time',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '',
    },
    {
      field: 'cancel_time',
      headerName: 'Cancel Time',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '',
    },
    {
      field: 'note', headerName: 'Note',

    },
    {
      field: 'urgent', headerName: 'Urgent',

      cellRenderer: (params: ICellRendererParams) => {
        return params.value
          ? '<span style="color: red; font-weight: bold;">Yes</span>'
          : '<span>No</span>';
      }
    },
    {field: 'distance', headerName: 'Distance'},
    {field: 'duration', headerName: 'Duration'},
    {
      field: 'created', headerName: 'Created',
      valueFormatter: (params) => this.datePipe.transform(params.value, 'MMM d, y, h:mm a') || '',
    }
  ];

  constructor(_reservationsService: ReservationsService) {
    super(_reservationsService);
  }

  async ngOnInit() {
    await this.fetchReservations();
  }
}
