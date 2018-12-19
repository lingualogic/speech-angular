import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakComponent } from './speak.component';

describe('SpeakComponent', () => {
  let component: SpeakComponent;
  let fixture: ComponentFixture<SpeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
