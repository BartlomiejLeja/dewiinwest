import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, Output, EventEmitter } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';


@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  template: `
    <section class="carousel-wrapper" [ngStyle]="carouselWrapperStyle">
      <ul class="carousel-inner" #carousel>
        <li *ngFor="let item of items;" class="carousel-item">
          <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
        </li>
      </ul>
    </section>
    <div *ngIf="showControls" class = "control-buttons" >
    <button (click)="prev()" class="btn btn-default">
      <mat-icon>arrow_back_ios</mat-icon> 
    </button>
      <button (click)="next()" class="btn btn-default">
        <mat-icon>arrow_forward_ios</mat-icon> 
      </button>
    </div>
  `,
  styles: [`
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 6000px;
    }

    .carousel-wrapper {
     
      overflow: hidden;
      z-index: -1;
    }

    .carousel-inner {
     
      display: flex;
    }

    .control-buttons {
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: 400px;
      margin-left: 60px;
      height: 50px;
      width: 90%;
    }

    button {
      background-color: Transparent;
      background-repeat:no-repeat;
      border: none;
      cursor:pointer;
    }

    .mat-icon {
      font-size: 50px;
      color: white
    }

  `]
})
export class CarouselComponent implements AfterViewInit {
   @Output() changeContentOutput = new EventEmitter();
  @ContentChildren(CarouselItemDirective) items : QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements : QueryList<ElementRef>;
  @ViewChild('carousel',{static: false}) private carousel : ElementRef;
  @Input() timing = '350ms ease-in';
  @Input() showControls = true;
 
  private player : AnimationPlayer;
  private itemWidth : number;
  private currentSlide = 0;
  carouselWrapperStyle = {

  }

  next() {
    if( this.currentSlide + 1 === this.items.length ) return;
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation : AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
    this.changeContentOutput.emit('next');
  }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    if( this.currentSlide === 0 ) return;

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation : AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
    this.changeContentOutput.emit('prev');
  }

  constructor( private builder : AnimationBuilder ) {
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      //  let test = this.carousel;
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        //  width: `${this.itemWidth}px;`,
        width: `100%`,
     
      }
    });
    
  }

}
