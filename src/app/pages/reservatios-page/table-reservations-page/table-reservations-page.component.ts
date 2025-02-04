import {Component, OnInit} from '@angular/core';
import {MatTableComponent} from "../../../components/mat-table/mat-table.component";
import {BaseReservationsPage} from "../base-reservations-page";
import {ReservationsService} from "../../../services/reservations-service.service";
import {PaginatorComponent} from "../../../components/paginator/paginator.component";

@Component({
  selector: 'app-table-reservations-page',
  standalone: true,
  imports: [
    MatTableComponent,
    PaginatorComponent
  ],
  templateUrl: './table-reservations-page.component.html',
  styleUrl: './table-reservations-page.component.css'
})
export class TableReservationsPageComponent extends BaseReservationsPage implements OnInit {
  displayedCols = [
    "id",
    "reservationId",
    "status",
    "type",
    "scheduled_pickup_time",
    "pickup_time",
    "dropoff_time",
    "cancel_time",
    "note",
    "urgent",
    "distance",
    "duration",
    "created"
  ];

  constructor(_reservationsService: ReservationsService) {
    super(_reservationsService);
  }

  async ngOnInit() {
    await this.fetchReservations();
  }

}
