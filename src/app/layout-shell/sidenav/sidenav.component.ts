import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenav, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from '../services/sidenav.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Router } from '@angular/router';
import { SelectedRouteService } from '../services/selected-route.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @ViewChild('snav', { static: true }) sidenav: any;
  public mobileQuery: MediaQueryList;
  public selectedLink: string;
  //public viewHeader = true;

  private _mobileQueryListener: () => void;
  
  constructor( 
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher, 
    private router: Router,
    private sidenavService: SidenavService,
    private selectedRouteService: SelectedRouteService,
    private changeDetector: ChangeDetectorRef) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
     }

  public ngOnInit(): void {
    this.sidenavService.sidenavInit(this.sidenav);
    this.selectedRouteService.isForSaleRealEstateTabChanged.subscribe(
      link => {
        this.selectedLink = link;
        // link == 'inwestycjezakonczone' ||  
        // link == 'onas' ||  
        // link == 'kontakt' || 
        // link == 'aktualnaoferta' ? this.viewHeader = false : this.viewHeader = true;
      })
  }

  public ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
}

  public sidenavToggle(){
    this.sidenavService.sidenavToggle();
  }

  public routeTo(route: string): void{
    this.router.navigate([route]);
    this.sidenavToggle();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  
}

