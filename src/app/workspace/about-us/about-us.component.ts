import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SelectedRouteService } from 'src/app/layout-shell/services/selected-route.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private selectedRouteService: SelectedRouteService,
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher, ) { 
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnInit() {
    this.selectedRouteService.routerChanged('onas')
  }

}
