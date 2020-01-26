import { HousePropertise } from './house-propertise.model';
import { ApartmentPropertise } from './apartment-propertise.model';
import { RealEstateReservation } from './real-estate-reservation.model';

 export class RealEstate {
    realEstateName: string;
    realEstateShortInfo: string;
    realEstateDescription: string;
    realEstatePhotoUrl: string[] = [];
    realEstatePrice: string;
    realEstateLocation: string;
    constructionAcceptance: string;
    additionalInformation: string;
    realEstateReservationArray: RealEstateReservation[]
    lngLatOfRealEstate: number[]
    constructor(){

    }
}

export class House extends RealEstate {
    housePropertise?: HousePropertise[] = [];
}

export class Apartment extends RealEstate {
    apartmentPropertise?: ApartmentPropertise[] = [];
}