import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

// Create standalone stub components
@Component({
  selector: 'app-logo',
  template: '',
  standalone: true
})
class LogoComponentStub {}

@Component({
  selector: 'app-keyboard',
  template: '',
  standalone: true
})
class KeyboardComponentStub {}

@Component({
  selector: 'app-footer',
  template: '',
  standalone: true
})
class FooterComponentStub {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        LogoComponentStub,
        KeyboardComponentStub,
        FooterComponentStub
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the logo component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoElement = compiled.querySelector('app-logo');
    expect(logoElement).toBeTruthy();
  });

  it('should contain the keyboard component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const keyboardElement = compiled.querySelector('app-keyboard');
    expect(keyboardElement).toBeTruthy();
  });

  it('should contain the footer component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footerElement = compiled.querySelector('app-footer');
    expect(footerElement).toBeTruthy();
  });
});
