import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MatTableComponent} from "./components/mat-table/mat-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'radix-task';
}
