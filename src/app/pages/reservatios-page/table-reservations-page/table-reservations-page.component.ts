import {Component, OnInit} from '@angular/core';
import {MatTableComponent} from "../../../components/mat-table/mat-table.component";
import {BaseReservationsPage} from "../base-reservations-page";
import {ReservationsService} from "../../../services/reservations-service.service";
import {PaginatorComponent} from "../../../components/paginator/paginator.component";
import {NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-table-reservations-page',
  standalone: true,
  imports: [
    MatTableComponent,
    PaginatorComponent,
    NgIf,
    MatProgressSpinner
  ],
  templateUrl: './table-reservations-page.component.html',
  styleUrl: './table-reservations-page.component.css'
})
export class TableReservationsPageComponent extends BaseReservationsPage implements OnInit {

  colsKeys = [
    'id',
    'reservationId',
    'status',
    'type',
    'scheduled_pickup_time',
    'pickup_time',
    'dropoff_time',
    'cancel_time',
    'note',
    'urgent',
    'distance',
    'duration',
    'created',
  ];

  displayedCols = {
    'id': {title: 'ID', type: 'text'},
    'reservationId': {title: 'Reservation ID', type: 'text'},
    'status': {title: 'Status', type: 'text'},
    'type': {title: 'Type', type: 'text'},
    'scheduled_pickup_time': {title: 'Scheduled Pickup Time', type: 'datetime'},
    'pickup_time': {title: 'Pickup Time', type: 'datetime'},
    'dropoff_time': {title: 'Dropoff Time', type: 'datetime'},
    'cancel_time': {title: 'Cancel Time', type: 'datetime'},
    'note': {title: 'Note', type: 'text'},
    'urgent': {title: 'Urgent', type: 'boolean'},
    'distance': {title: 'Distance', type: 'number'},
    'duration': {title: 'Duration', type: 'number'},
    'created': {title: 'Created', type: 'datetime'}
  };


  constructor(_reservationsService: ReservationsService) {
    super(_reservationsService);
  }

  async ngOnInit() {
    await this.fetchReservations();
  }

}
