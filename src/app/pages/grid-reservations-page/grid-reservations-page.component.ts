import { Component } from '@angular/core';
import {MatTableComponent} from "../../../components/mat-table/mat-table.component";

@Component({
  selector: 'app-grid-reservations-page',
  standalone: true,
    imports: [
        MatTableComponent
    ],
  templateUrl: './grid-reservations-page.component.html',
  styleUrl: './grid-reservations-page.component.css'
})
export class GridReservationsPageComponent {

}
