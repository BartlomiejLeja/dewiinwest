import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SelectedRouteService } from '../../layout-shell/services/selected-route.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
