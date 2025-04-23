import { Component, Input } from '@angular/core';
import {Ikey} from '../components/interfaces/Ikey';
import {AudioService} from '../services/audio.service';

@Component({
  selector: 'keyboard',
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

  @Input() key!: Ikey;
  @Input() classKey: string = "";

  constructor(
    private audioService: AudioService
  ) { }

  onTap(key: Ikey): void {
    this.audioService.playAudio(key.note);
  }

}

