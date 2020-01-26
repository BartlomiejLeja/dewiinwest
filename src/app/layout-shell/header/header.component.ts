import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatMenuTrigger } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectedRouteService } from '../services/selected-route.service';
import * as forSaleRealEstate from '../../../data/forSaleRealEstate.json';
import { RealEstate } from '../../workspace/models/real-estate.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public clickedOnActualOfferRealEstate : boolean = false;
  public selectedLink: string;
  public forSaleRealEstateArray: RealEstate[] = (forSaleRealEstate as any).default;
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
  
  constructor(
    private sidenavService: SidenavService,
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher,
    private router: Router,
    private route: ActivatedRoute,
    private selectedRouteService: SelectedRouteService ) { 
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnInit() {
    this.selectedRouteService.isForSaleRealEstateTabChanged.subscribe(
    link=> this.selectedLink = link
    )
  }

  public sidenavToggle(){
    this.sidenavService.sidenavToggle();
  }

  public trigerMenu() {
    this.trigger.openMenu();
  }
  public closeMenu(){
    this.trigger.closeMenu();
  }

  public routeTo(route: string): void{
    this.router.navigate([route]);
  }

  public route2To(route: string): void{
    this.router.navigate(['realestate',route],{relativeTo: this.route.parent});
  }

  public clickOnRouterButton(linkName: string){
    // this.clickedOnActualOfferRealEstate = clicked;
    this.selectedLink = linkName;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
