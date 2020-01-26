import { Component, OnInit, Input } from '@angular/core';
import { ApartmentPropertise } from '../models/apartment-propertise.model';

@Component({
  selector: 'app-apartment-properties',
  templateUrl: './apartment-properties.component.html',
  styleUrls: ['./apartment-properties.component.scss']
})
export class ApartmentPropertiesComponent implements OnInit {
  @Input() apartmentPropertises: ApartmentPropertise[];
  constructor() { }

  ngOnInit() {
  }

}