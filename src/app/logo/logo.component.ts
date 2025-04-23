import {Component, signal} from '@angular/core';

@Component({
  selector: 'logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

  title = signal('𝄞  Xilófono  𝄞');
}
