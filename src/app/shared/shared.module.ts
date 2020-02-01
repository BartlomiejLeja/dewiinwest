import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { AnimatedCounterComponent } from './components/animated-counter/animated-counter.component';
import { MapComponent } from './components/map/map.component';
import { BackgroundImageLoadedDirective } from './directives/background-image-loaded.directive';

@NgModule({
  declarations: [FlipCardComponent, AnimatedCounterComponent, MapComponent, BackgroundImageLoadedDirective ],
  imports: [
    CommonModule
  ],
  exports: [FlipCardComponent,AnimatedCounterComponent,MapComponent, BackgroundImageLoadedDirective ]
})
export class SharedModule { }
