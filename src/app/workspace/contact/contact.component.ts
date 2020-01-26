import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SelectedRouteService } from 'src/app/layout-shell/services/selected-route.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public lngLat: number[] = [19.999279,50.023316];
  constructor(
    private selectedRouteService: SelectedRouteService,
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher, ) { 
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnInit() {
    this.selectedRouteService.routerChanged('kontakt')
  }

}
