import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { AnimatedCounterComponent } from './components/animated-counter/animated-counter.component';
import { MapComponent } from './components/map/map.component';
import { BackgroundImageLoadedDirective } from './directives/background-image-loaded.directive';
import { ImageloadedDirective } from './directives/image-loaded.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [FlipCardComponent, AnimatedCounterComponent, MapComponent, BackgroundImageLoadedDirective,ImageloadedDirective, SpinnerComponent ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [FlipCardComponent,AnimatedCounterComponent,MapComponent, BackgroundImageLoadedDirective,ImageloadedDirective,SpinnerComponent ]
})
export class SharedModule { }
