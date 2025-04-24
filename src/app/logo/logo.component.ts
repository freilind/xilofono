import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

  title = signal('𝄞  Xilófono  𝄞');
}
