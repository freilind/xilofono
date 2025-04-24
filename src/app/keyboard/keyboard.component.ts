import {Component, signal} from '@angular/core';
import {KeyComponent} from '../key/key.component';

@Component({
  selector: 'app-keyboard',
  imports: [
    KeyComponent
  ],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

  do = signal({note: 'DO' ,label:'DO 𝄡'});
  re =signal({note: 'RE' ,label:'RE'});
  mi =signal({note: 'MI' ,label:'MI'});
  fa =signal({note: 'FA' ,label:'FA 𝄢'});
  sol =signal({note: 'SOL' ,label:'SOL 𝄞'});
  la = signal({note: 'LA' ,label:'LA'});
  si = signal({note: 'SI' ,label:'SI'});
  do2 = signal({note: 'DO2' ,label:'DO 𝄡'});

}
