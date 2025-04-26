import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardComponent } from './keyboard.component';
import {LogoComponent} from '../logo/logo.component';

describe('KeyboardComponent', () => {
  let component: KeyboardComponent;
  let fixture: ComponentFixture<KeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'do' note`, () => {
    const fixture = TestBed.createComponent(KeyboardComponent);
    const component = fixture.componentInstance;
    expect(component.do().note).toEqual('DO');
    expect(component.do().label).toEqual('DO 𝄡');
  });

  it(`should have the 're' note`, () => {
    const fixture = TestBed.createComponent(KeyboardComponent);
    const component = fixture.componentInstance;
    expect(component.re().note).toEqual('RE');
    expect(component.re().label).toEqual('RE');
  });

  it(`should have the 'mi' note`, () => {
    const fixture = TestBed.createComponent(KeyboardComponent);
    const component = fixture.componentInstance;
    expect(component.mi().note).toEqual('MI');
    expect(component.mi().label).toEqual('MI');
  });

  it(`should have the 'fa' note`, () => {
    const fixture = TestBed.createComponent(KeyboardComponent);
    const component = fixture.componentInstance;
    expect(component.fa().note).toEqual('FA');
    expect(component.fa().label).toEqual('FA 𝄢');
  });

  it(`should have the 'sol' note`, () => {
    const fixture = TestBed.createComponent(KeyboardComponent);
    const component = fixture.componentInstance;
    expect(component.sol().note).toEqual('SOL');
    expect(component.sol().label).toEqual('SOL 𝄞');
  });

  it(`should have the 'la' note`, () => {
    const fixture = TestBed.createComponent(KeyboardComponent);
    const component = fixture.componentInstance;
    expect(component.la().note).toEqual('LA');
    expect(component.la().label).toEqual('LA');
  });

  it(`should have the 'si' note`, () => {
    const fixture = TestBed.createComponent(KeyboardComponent);
    const component = fixture.componentInstance;
    expect(component.si().note).toEqual('SI');
    expect(component.si().label).toEqual('SI');
  });

  it(`should have the 'do2' note`, () => {
    const fixture = TestBed.createComponent(KeyboardComponent);
    const component = fixture.componentInstance;
    expect(component.do2().note).toEqual('DO2');
    expect(component.do2().label).toEqual('DO 𝄡');
  });

});
