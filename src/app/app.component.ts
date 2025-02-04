import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MatTableComponent} from "./components/mat-table/mat-table.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatTableComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'radix-task';
  navbarPages = [{title: 'Table View', path: '/table'}, {title: 'Grid View', path: '/grid'}]
}
