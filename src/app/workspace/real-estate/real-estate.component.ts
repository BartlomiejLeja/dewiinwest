import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { ActivatedRoute, Router } from '@angular/router';
import { RealEstateReservation } from '../models/real-estate-reservation.model';
import { MediaMatcher } from '@angular/cdk/layout';
import * as forSaleRealEstate from '../../../data/forSaleRealEstate.json';
import * as soldRealEstate from '../../../data/soldRealEstate.json';
import { RealEstate } from '../models/real-estate.model';
import { SelectedRouteService } from '../../layout-shell/services/selected-route.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealEstateComponent implements OnInit, OnDestroy {
  public realEstate: any;
  public visualizationImageList: string[];
  items: GalleryItem[];
  public realEstateReservationArray: RealEstateReservation[];
  public lngLat: number[] = [19.999279, 50.023316];
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public forSaleRealEstateArray: RealEstate[] = (forSaleRealEstate as any).default;
  public soldRealEstateArray: RealEstate[] = (soldRealEstate as any).default;

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private selectedRouteService: SelectedRouteService) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
    };
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
     }

  public ngOnInit(): void {
      const realEstateName = this.route.snapshot.url[1].path;
      this.realEstate = this.soldRealEstateArray.find(re => re.realEstateName === realEstateName);

       if(!this.realEstate){
         this.realEstate = this.forSaleRealEstateArray
       .find(re=>re.realEstateName===realEstateName);
       this.selectedRouteService.routerChanged('aktualnaoferta')
       } else {
         this.selectedRouteService.routerChanged('inwestycjezakonczone')
       }
     /** Lightbox Example */
 
     // Get a lightbox gallery ref
     const lightboxRef = this.gallery.ref('lightbox');
 
     // Add custom gallery config to the lightbox (optional)
     lightboxRef.setConfig({
       imageSize: ImageSize.Contain,
      thumb: false,
      loadingMode: 'indeterminate'

       //thumbPosition: ThumbnailsPosition.Top
     });
 
     // Load items into the lightbox gallery ref
     lightboxRef.load(this.items);
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
