import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeTabComponent } from './welcome-tab/welcome-tab.component';
import { CarouselComponent, CarouselItemElement } from './carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';
import {MatIconModule} from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { SharedModule } from '../shared/shared.module';
import { RealEstateComponent } from './real-estate/real-estate.component';
// import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RealEstateListComponent } from './real-estate-list/real-estate-list.component';
import { HousePropertiesComponent } from './house-properties/house-properties.component';
import { ApartmentPropertiesComponent } from './apartment-properties/apartment-properties.component';
import { CheckIfRealEstateIsReserved } from './pipes/isRealEstateReserved.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    NgxTinySliderModule,
    MatCarouselModule.forRoot(),
    SharedModule,
    // NgxGalleryModule
    GalleryModule,
    LightboxModule,
    GallerizeModule,
  ],
  declarations: [WelcomeTabComponent, CarouselComponent,CarouselItemElement, 
    CarouselItemDirective, 
    RealEstateComponent, 
    ContactComponent, 
    AboutUsComponent, 
    RealEstateListComponent, 
    HousePropertiesComponent, 
    ApartmentPropertiesComponent,
    CheckIfRealEstateIsReserved ],

  exports: [WelcomeTabComponent,RealEstateComponent]
})
export class WorkspaceModule { }
