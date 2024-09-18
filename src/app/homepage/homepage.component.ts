import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
