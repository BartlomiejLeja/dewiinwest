import { Directive, Input,  Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageloaded]'
})
export class ImageloadedDirective {
  @Output() imageLoaded: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const img = new Image();
    const bgStyle = this.el.nativeElement.getElementsByClassName("tp-box__side tp-box__front")[0].style.background
    const src = bgStyle.replace(/(^url\()|(\)$|[\"\'])/g, '');
    img.src = src;
    img.addEventListener('load', ()=> {
      this.imageLoaded.emit(true);
    });
  }
}