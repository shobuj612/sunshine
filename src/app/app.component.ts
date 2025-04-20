import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HorizontalNavbarComponent } from "./horizontal-navbar/horizontal-navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HorizontalNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anguler_garment';
}
