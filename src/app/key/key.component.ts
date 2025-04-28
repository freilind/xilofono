import { Component, Input } from '@angular/core';
import {Ikey} from '../components/interfaces/Ikey';
import {AudioService} from '../services/audio.service';

@Component({
  selector: 'app-key',
  imports: [],
  templateUrl: './key.component.html',
  styleUrl: './key.component.css'
})
export class KeyComponent {

  @Input() key!: Ikey;
  @Input() classKey: string = "";

  constructor(
    private audioService: AudioService
  ) { }

  onTap(key: Ikey): void {
    this.audioService.playAudio(key.note);
  }

}

