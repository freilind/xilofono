import { TestBed } from '@angular/core/testing';
import { AudioService } from './audio.service';

describe('AudioService', () => {
  let service: AudioService;
  let audioMock: any;

  // Track the original Audio constructor
  let originalAudio: any;

  beforeEach(() => {
    // Store original Audio constructor
    originalAudio = window.Audio;

    // Create a mock audio object with a play method
    audioMock = {
      src: '',
      play: jasmine.createSpy('play')
    };

    // Mock the Audio constructor with a function that returns our mock
    window.Audio = jasmine.createSpy().and.callFake(function() {
      return audioMock;
    }) as any;

    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioService);
  });

  afterEach(() => {
    // Restore original Audio constructor after tests
    window.Audio = originalAudio;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an Audio object with correct source when playAudio is called', () => {
    // Arrange
    const testNote = 'C4';

    // Act
    service.playAudio(testNote);

    // Assert
    expect(window.Audio).toHaveBeenCalled();
    expect(audioMock.src).toEqual(`/assets/sounds/${testNote}.mp3`);
  });

  it('should call play() method when playAudio is called', () => {
    // Arrange
    const testNote = 'G3';

    // Act
    service.playAudio(testNote);

    // Assert
    expect(audioMock.play).toHaveBeenCalled();
  });

  // Test edge cases
  it('should handle different note values correctly', () => {
    // Test with various note values
    const testCases = ['A2', 'B5', 'F#3', 'special-sound'];

    testCases.forEach(note => {
      // Reset spy counts
      (window.Audio as any).calls.reset();
      audioMock.play.calls.reset();

      // Act
      service.playAudio(note);

      // Assert
      expect(window.Audio).toHaveBeenCalled();
      expect(audioMock.src).toEqual(`/assets/sounds/${note}.mp3`);
      expect(audioMock.play).toHaveBeenCalled();
    });
  });
});
