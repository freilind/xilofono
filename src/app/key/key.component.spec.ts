import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyComponent } from './key.component';
import { AudioService } from '../services/audio.service';

describe('KeyComponent', () => {
  let component: KeyComponent;
  let fixture: ComponentFixture<KeyComponent>;
  let audioServiceSpy: jasmine.SpyObj<AudioService>;

  beforeEach(async () => {
    // Create a spy for AudioService
    audioServiceSpy = jasmine.createSpyObj('AudioService', ['playAudio']);

    await TestBed.configureTestingModule({
      imports: [KeyComponent],
      providers: [
        { provide: AudioService, useValue: audioServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyComponent);
    component = fixture.componentInstance;

    // Set the required @Input properties
    component.key = { note: 'DO', label: 'DO 𝄡' };

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set default classKey value', () => {
    expect(component.classKey).toBe('');
  });

  it('should set custom classKey value when provided', () => {
    component.classKey = 'custom-class';
    expect(component.classKey).toBe('custom-class');
  });

  it('should set the key input property', () => {
    const testKey = { note: 'RE', label: 'RE' };
    component.key = testKey;
    expect(component.key).toEqual(testKey);
  });

  it('should call audioService.playAudio when onTap is called', () => {
    const testKey = { note: 'MI', label: 'MI' };
    component.onTap(testKey);
    expect(audioServiceSpy.playAudio).toHaveBeenCalledWith('MI');
  });

  it('should render the key label in the template', () => {
    component.key = { note: 'FA', label: 'FA 𝄢' };
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('FA 𝄢');
  });

  it('should apply the classKey to the element', () => {
    component.classKey = 'special-key';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const keyElement = compiled.querySelector('.special-key');
    expect(keyElement).not.toBeNull();
  });
});
