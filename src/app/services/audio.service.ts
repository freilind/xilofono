import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playAudio(note: string): void {
    const audio = new Audio();
    audio.src = `/assets/sounds/${note}.mp3`;
    audio.play();
  }

}
