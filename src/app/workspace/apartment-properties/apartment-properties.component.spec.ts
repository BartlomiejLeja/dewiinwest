import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentPropertiesComponent } from './apartment-properties.component';

describe('ApartmentPropertiesComponent', () => {
  let component: ApartmentPropertiesComponent;
  let fixture: ComponentFixture<ApartmentPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
