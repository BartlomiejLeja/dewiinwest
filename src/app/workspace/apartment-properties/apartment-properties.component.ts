import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ApartmentPropertise } from '../models/apartment-propertise.model';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-apartment-properties',
  templateUrl: './apartment-properties.component.html',
  styleUrls: ['./apartment-properties.component.scss']
})
export class ApartmentPropertiesComponent implements OnInit, OnDestroy {
  @Input() apartmentPropertises: ApartmentPropertise[];
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
  ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() {
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
