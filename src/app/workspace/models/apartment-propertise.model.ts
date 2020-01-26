import { Property } from './property.model';

export class ApartmentPropertise{
    apartmentName : string;
    levelProperties: LevelProperties[] = [];
  }

export class LevelProperties {
  levelInformation: string;
  apartmentPropertis: Property[];
}
  