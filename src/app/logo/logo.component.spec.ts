import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import {AppComponent} from '../app/app.component';
import {ComponentRef} from '@angular/core';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the '𝄞  Xilófono  𝄞' title`, () => {
    const fixture = TestBed.createComponent(LogoComponent);
    const component = fixture.componentInstance;
    expect(component.title()).toEqual('𝄞  Xilófono  𝄞');
  });
});
