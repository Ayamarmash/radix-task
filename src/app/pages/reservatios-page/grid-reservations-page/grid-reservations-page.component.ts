import {Component, OnInit} from '@angular/core';
import {MatTableComponent} from "../../../components/mat-table/mat-table.component";
import {BaseReservationsPage} from "../base-reservations-page";
import {ReservationsService} from "../../../services/reservations-service.service";

@Component({
  selector: 'app-grid-reservations-page',
  standalone: true,
  imports: [
    MatTableComponent
  ],
  templateUrl: './grid-reservations-page.component.html',
  styleUrl: './grid-reservations-page.component.css'
})
export class GridReservationsPageComponent extends BaseReservationsPage implements OnInit {
  constructor(_reservationsService: ReservationsService) {
    super(_reservationsService);
  }

  async ngOnInit() {
    await this.fetchReservations();
  }
}
