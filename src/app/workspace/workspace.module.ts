import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeTabComponent } from './welcome-tab/welcome-tab.component';
import {MatIconModule} from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RealEstateListComponent } from './real-estate-list/real-estate-list.component';
import { HousePropertiesComponent } from './house-properties/house-properties.component';
import { ApartmentPropertiesComponent } from './apartment-properties/apartment-properties.component';
import { CheckIfRealEstateIsReserved } from './pipes/isRealEstateReserved.pipe';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCarouselModule.forRoot(),
    SharedModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    WelcomeTabComponent,
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
