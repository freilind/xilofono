import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }
  private audio = new Audio();

  playAudio(note: string): void {
    this.audio.src = `/assets/sounds/${note}.mp3`;
    this.audio.play();
  }

}
