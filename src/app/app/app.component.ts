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

  do = signal({note: 'DO' ,label:'DO 𝄡'});
  re =signal({note: 'RE' ,label:'RE'});
  mi =signal({note: 'MI' ,label:'MI'});
  fa =signal({note: 'FA' ,label:'FA 𝄢'});
  sol =signal({note: 'SOL' ,label:'SOL 𝄞'});
  la = signal({note: 'LA' ,label:'LA'});
  si = signal({note: 'SI' ,label:'SI'});
  do2 = signal({note: 'DO2' ,label:'DO 𝄡'});
}
