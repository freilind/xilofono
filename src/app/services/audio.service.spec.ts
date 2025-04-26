import { TestBed } from '@angular/core/testing';

import { AudioService } from './audio.service';

describe('AudioService', () => {
  let service: AudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioService);
    spyOn(service['audio'], 'play');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should play audio', () => {
    service.playAudio('test.mp3');
    expect(service['audio'].play).toHaveBeenCalled();
  });
});
