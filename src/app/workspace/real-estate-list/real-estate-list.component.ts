import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompletedRealEstateInvestmentsService } from '../services/completed-real-estate-investments.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ForSaleRealEstateInvestmentsService } from '../services/for-sale-real-estate-investments.service';
import { SelectedRouteService } from '../../layout-shell/services/selected-route.service';
import * as forSaleRealEstate from '../../../data/forSaleRealEstate.json';
import * as soldRealEstate from '../../../data/soldRealEstate.json';
import { RealEstate } from '../models/real-estate.model';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.scss']
})
export class RealEstateListComponent implements OnInit {

  public realEstateList: RealEstateShortInfo[];
  public titlte: string;
  public mobileQuery: MediaQueryList;
  public forSaleRealEstateArray: RealEstate[] = (forSaleRealEstate as any).default;
  public soldRealEstateArray: RealEstate[] = (soldRealEstate as any).default;
  private _mobileQueryListener: () => void;
  constructor( 
    private router: Router, 
    private route: ActivatedRoute,
    private completedRealEstateInvestmentsService: CompletedRealEstateInvestmentsService,
    private forSaleRealEstateInvestments: ForSaleRealEstateInvestmentsService,
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher,
    private selectedRouteService: SelectedRouteService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.route.snapshot.url[0].path ==='inwestycjezakonczone' ? this.titlte = 'Zakończone inwestycje' : this.titlte = 'Aktualne inwestycje'

    if(this.route.snapshot.url[0].path ==='inwestycjezakonczone'){
      this.realEstateList = [];
      this.soldRealEstateArray.forEach(re => {
        this.realEstateList.push( {realEstateName: re.realEstateName, realEstateImageUrl: re.realEstatePhotoUrl[0]})
      })
      this.selectedRouteService.routerChanged('inwestycjezakonczone')
    }else {
      this.realEstateList = [];
      this.forSaleRealEstateArray.forEach(re => {
        this.realEstateList.push( {realEstateName: re.realEstateName, realEstateImageUrl: re.realEstatePhotoUrl[0]})
      })
      this.selectedRouteService.routerChanged('aktualnaoferta')
    }
  }

  public goToRealEstate(realEstateName: string){
    this.router.navigate([`/realestate/${realEstateName}`]);
  }
}

interface RealEstateShortInfo {
  realEstateName: string;
  realEstateImageUrl: string;
}