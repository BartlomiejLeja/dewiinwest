import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemDirective } from './CarouselItem/carousel-item.directive';
import { CarouselItemElement } from './CarouselIteamElement/carousel-item-element.directive';

@NgModule({
  declarations: [CarouselItemDirective, CarouselItemElement],
  imports: [
    CommonModule
  ],
  exports: [CarouselItemDirective,CarouselItemElement]
})
export class DirectivesModule { }
