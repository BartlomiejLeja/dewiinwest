import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class FlipCardComponent implements OnInit, OnDestroy {
  @Input() realEstateName: string;
  @Input() descriptions: string[];
  @Input() imageUrl: string;
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor( private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher,) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
     }

  ngOnInit() {
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  invokeflip() {
    this.flip = 'active';
  }

  invokeUnFlip () {
    this.flip =  'inactive';
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
