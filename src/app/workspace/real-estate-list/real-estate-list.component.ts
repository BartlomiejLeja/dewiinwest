import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
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
  public isLoading = true;
  private _mobileQueryListener: () => void;
  private countOfLoadedImages: number = 0;
  
  constructor( 
    private router: Router, 
    private route: ActivatedRoute,
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

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public loadedImages(): void{
     this.countOfLoadedImages = ++this.countOfLoadedImages;
    if(this.countOfLoadedImages == this.realEstateList.length) {
      this.isLoading = false 
    } 
  }
}

interface RealEstateShortInfo {
  realEstateName: string;
  realEstateImageUrl: string;
}