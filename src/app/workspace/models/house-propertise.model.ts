import { Property } from './property.model';

export class HousePropertise {
    buildingsName : string;
    functionalSurface: number;
    floorSurfaces: number;
    groundFloor: Property[];
    firstFloor: Property[];
    attic: Property[];
}
