import { Injectable, EventEmitter, Output } from '@angular/core';


@Injectable({
    providedIn: 'root',
  })
export class SelectedRouteService {


    @Output() isForSaleRealEstateTabChanged = new EventEmitter<string>();

    public routerChanged(linkToRoute: string) {
        this.isForSaleRealEstateTabChanged.emit(linkToRoute)
    }

}

