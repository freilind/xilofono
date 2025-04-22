import {Component, signal} from '@angular/core';
import {KeyboardComponent} from '../keyboard/keyboard.component';
import {LogoComponent} from '../logo/logo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    KeyboardComponent,
    LogoComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Xilofono';

  do = signal('DO 𝄡');
  re =signal( 'RE');
  mi =signal( 'MI');
  fa =signal( 'FA 𝄢');
  sol =signal( 'SOL 𝄞');
  la = signal('LA');
  si = signal('SI');
  do2 = signal('DO 𝄡');
}
