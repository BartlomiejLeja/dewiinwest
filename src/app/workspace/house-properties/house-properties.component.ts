import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { HousePropertise } from '../models/house-propertise.model';
import { Property } from '../models/property.model';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-house-properties',
  templateUrl: './house-properties.component.html',
  styleUrls: ['./house-properties.component.scss']
})
export class HousePropertiesComponent implements OnInit {

  @Input() housePropertises: HousePropertise[];
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher,) { 
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  
  
  ngOnInit() {
    console.log(this.housePropertises)
  }

  public levelSurfuce(properties: Property[] ){
      let sumValue = 0;
      properties.forEach(prop => {
        sumValue +=  +prop.value
      })
      return sumValue;
  }

}



