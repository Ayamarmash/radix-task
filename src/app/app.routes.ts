import {Routes} from '@angular/router';
import {
  TableReservationsPageComponent
} from "./pages/reservatios-page/table-reservations-page/table-reservations-page.component";
import {
  GridReservationsPageComponent
} from "./pages/reservatios-page/grid-reservations-page/grid-reservations-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: 'table', component: TableReservationsPageComponent},
  {path: 'grid', component: GridReservationsPageComponent},
];
