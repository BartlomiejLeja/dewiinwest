export class RealEstateReservation {
    public realEstateInfo: string;
    public isReserved: boolean;

    constructor(realEstateInfo: string, isReserved:boolean ){
      this.realEstateInfo = realEstateInfo;
      this.isReserved = isReserved;
    }
}