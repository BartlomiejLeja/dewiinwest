import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SelectedRouteService } from '../../layout-shell/services/selected-route.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
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

  public ngOnInit(): void {
    this.selectedRouteService.routerChanged('kontakt')
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
