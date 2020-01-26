import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePropertiesComponent } from './house-properties.component';

describe('HousePropertiesComponent', () => {
  let component: HousePropertiesComponent;
  let fixture: ComponentFixture<HousePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
