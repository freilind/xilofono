import {Component} from '@angular/core';
import {LogoComponent} from '../logo/logo.component';
import {KeyboardComponent} from '../keyboard/keyboard.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    LogoComponent,
    KeyboardComponent,
    FooterComponent
  ],
  styleUrl: ''
})
export class AppComponent {

}
