import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTabComponent } from './welcome-tab.component';

describe('WelcomeTabComponent', () => {
  let component: WelcomeTabComponent;
  let fixture: ComponentFixture<WelcomeTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
