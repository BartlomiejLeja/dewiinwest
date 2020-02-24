import { Component, OnInit, ViewChild, ElementRef, Input, HostListener, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemePalette, MatIconRegistry } from '@angular/material';
import { Orientation, SvgIconOverrides } from '@ngmodule/material-carousel';

import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { SelectedRouteService } from '../../layout-shell/services/selected-route.service';

import { AnimatedCounterComponent } from '../../shared/components/animated-counter/animated-counter.component';


@Component({
  selector: 'app-welcome-tab',
  templateUrl: './welcome-tab.component.html',
  styleUrls: ['./welcome-tab.component.scss']
})
export class WelcomeTabComponent implements OnInit, OnDestroy {
  public mobileQuery: MediaQueryList;
  public lngLat: number[] = [ 20.007570, 50.023735];
  public realEstateFlipImages: RealEstateFlipImage[];
  public backgroundCounterUrl ='assets/test.jpg'
  private _mobileQueryListener: () => void;
  public carouselItems: any;
  public svgIconOverrides: SvgIconOverrides = {
    arrowBack: 'left-arrow',
    arrowForward: 'arrow'
  };
  public slidesList = new Array<never>(5);
  public parentHeight = 'auto';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'warn';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 25;
  public slideHeight = '750px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router,
    private selectedRouteService: SelectedRouteService
 ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.carouselItems = [
      { imageUrl: 'https://i.imgur.com/gZpglkA.png', title : 'Budujemy twoje marzenia', description: 'Twój Dom Group', isWelcomeImage: true },
      { imageUrl: 'https://i.imgur.com/nJsfIPz.jpg', title : 'Sloneczna Wadowska', description: 'Blisko do Krakowa, blisko do natury', isWelcomeImage: false  },
      { imageUrl: 'https://i.imgur.com/3j0NYXy.png',title : 'LA-DUBOIS', description: 'Nowoczesne osiedle, w pięknym otoczeniu', isWelcomeImage: false  },
    ];

    this.matIconRegistry.addSvgIcon(
      "arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/arrow.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "left-arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/arrow_back_ios-24px.svg")
    );
  }
 
  @Input() timing = '350ms ease-in';
  @ViewChild('test',{static: false}) private carousel : ElementRef;

  @ViewChild('counter',{static: false}) chatTeaser: ElementRef;
  @ViewChild('counter1',{static: false}) chatTeaser1: AnimatedCounterComponent;
  @ViewChild('counter2',{static: false}) chatTeaser2: AnimatedCounterComponent;
  @ViewChild('counter3',{static: false}) chatTeaser3: AnimatedCounterComponent;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.chatTeaser && this.chatTeaser.nativeElement.offsetTop >= scrollPosition) {
        this.chatTeaser1.animateCount();
        this.chatTeaser2.animateCount();
        this.chatTeaser3.animateCount();
    }
}

  ngOnInit() {
    this.selectedRouteService.routerChanged('main');
    this.realEstateFlipImages = [
      { 
        realEstateDescription: 'Idealne dla rodzin', 
        realEstateImageUrl: 'https://i.imgur.com/D0dewof.jpg',
        realEstateName: 'Zagłoba skwer',
        realEstateLink: '/realestate/Zagłoby Skwer'
      },
      { 
        realEstateDescription: 'Opatkowice Smoleńskiego',
        realEstateImageUrl: 'https://i.imgur.com/IsvpgrD.jpg',
        realEstateName: 'Apartmaenty nad Wilgą',
        realEstateLink: '/realestate/Apartamenty nad Wilgą - Opatkowice'
      },
      { realEstateDescription: 'Blisko centrum',
        realEstateImageUrl: 'https://i.imgur.com/DpQq5N5.jpg',
        realEstateName: 'Osiedle na Strażackiej',
        realEstateLink: '/realestate/Osiedle na Strażackiej'
      }
    ]
  }

  public goTocurrentInvestments(){
    this.selectedRouteService.routerChanged('aktualnaoferta');
    this.router.navigate(['/inwestycjeaktualne']);
  }

  public goToSelectedInvestment(realEstateLink: string) {
    this.selectedRouteService.routerChanged('aktualnaoferta');
    this.router.navigate([realEstateLink]);
  }

  onChange($event){
    //this.prev1()
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

interface RealEstateFlipImage {
  realEstateDescription: string;
  realEstateImageUrl: string;
  realEstateName: string;
  realEstateLink: string;
}
