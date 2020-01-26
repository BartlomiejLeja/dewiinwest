import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isRealEstateReserved'})
export class CheckIfRealEstateIsReserved implements PipeTransform {
  private pipeResult: string;
  transform(isReserved: boolean): string {
    
    isReserved === true ? this.pipeResult = 'zarezerwowane' : this.pipeResult = 'wolne'
    return this.pipeResult;
  }
}