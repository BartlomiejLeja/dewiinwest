import { Injectable } from '@angular/core';
import { RealEstate, Apartment, House } from '../models/real-estate.model';
import { ApartmentPropertise, LevelProperties } from '../models/apartment-propertise.model';
import { Property } from '../models/property.model';
import { HousePropertise} from '../models/house-propertise.model';

@Injectable({
    providedIn: 'root',
  })
  export class ForSaleRealEstateInvestmentsService {
  
    public forSaleRealEstateInvestments: RealEstate[];
    constructor() {
  
      /// UNRUGA START ///////////////////////////////////////////////
      let apartamentySlonecznaWadowska= new Apartment();
      apartamentySlonecznaWadowska.realEstateName = 'SŁONECZNA WADOWSKA';
      apartamentySlonecznaWadowska.realEstateShortInfo = 'NOWA HUTA';
      apartamentySlonecznaWadowska.realEstateDescription = `Słoneczna Wadowska to kameralne osiedle ośmiu domów jednorodzinnych w zabudowie bliźniaczej zlokalizowane w Nowej Hucie,  przy ul. Wadowskiej.
      Domy zaprojektowane zostały jako budynki jednopiętrowe z poddaszem użytkowym. Wykonywane są do stanu deweloperskiego, z możliwością wykończenia „pod klucz” według własnych preferencji nabywcy. 
      Pod względem jakościowym Słoneczna Wadowska  spełnia najwyższe standardy. Materiały wykorzystane do budowy domów oraz energooszczędna technologia zapewniają życie w warunkach zgodnych ze standardami ekologii.
      Styl architektury zabudowań utrzymany jest w prostej, ale ciepłej i eleganckiej estetyce i w połączeniu z przestronnym funkcjonalnym wnętrzem, pozwoli Państwu poczuć się wyjątkowo zamieszkując w tej urokliwej podmiejskiej, zielonej dzielnicy.
      Osiedle charakteryzuje się zielonym otoczeniem, niską zabudową jednorodzinną, bezpośrednim dostępem do komunikacji miejskiej, lokali handlowo-usługowych oraz placówek oświatowych.`
      apartamentySlonecznaWadowska.realEstatePhotoUrl.push(
      'assets/sloneczna-wadowska/orginal1-1200x563.jpg',
      'assets/sloneczna-wadowska/orginal2-1200x750.jpg'
      ); 
      apartamentySlonecznaWadowska.realEstateLocation = 'Nowa Huta ul. Wadowska, nr działek 84/2 i 84/3';
      apartamentySlonecznaWadowska.realEstatePrice = '499 000 zł za dwupoziomowy apartament 108,92 m2, lub  540.000 zł za apartament o pow. 113,06 m2';
      apartamentySlonecznaWadowska.constructionAcceptance = 'III kwartał 2018';
      apartamentySlonecznaWadowska.additionalInformation =`Do każdego apartamentu  przynależy miejsce postojowe w   garażu   kw w cenie 20 .000 zł i pomieszczenie gospodarcze o powierzchni  od 5,45 m kw do  17,42 m kw w cenie 2000 zł /m kw
       Mieszkanie sprzedawane jest w stanie deweloperskim, do własnej aranżacji.`
  
      let apartamentySlonecznaWadowskaProp1 = new ApartmentPropertise();
      apartamentySlonecznaWadowskaProp1.apartmentName = 'Mieszkanie nr 1 na parterze 57,45 m2';
      apartamentySlonecznaWadowska.lngLatOfRealEstate = [19.999279,50.023316];
  
      let apartamentySlonecznaWadowskaProp1LevelZero = new LevelProperties()
      apartamentySlonecznaWadowskaProp1LevelZero.levelInformation = 'poziom 0 - parter 57,45 m2'
      apartamentySlonecznaWadowskaProp1LevelZero.apartmentPropertis = [
          new Property('Sypialnia','9,95'),
          new Property('Gabinet','9,94'),
          new Property('Salon','16,01'),
          new Property('Kuchnia','10,48'),
          new Property('Łazienka','4,00'),
          new Property('Przedpokój','7,07'),
      ];
      
      apartamentySlonecznaWadowskaProp1.levelProperties.push(
        apartamentySlonecznaWadowskaProp1LevelZero
      )
    
      let apartamentySlonecznaWadowskaProp2 = new ApartmentPropertise();
      apartamentySlonecznaWadowskaProp2.apartmentName = 'Mieszkanie nr 3 na parterze 64,99 m2';
  
      let apartamentySlonecznaWadowskaProp2LevelZero = new LevelProperties()
      apartamentySlonecznaWadowskaProp2LevelZero.levelInformation = 'poziom 0 - parter 64,99 m2'
      apartamentySlonecznaWadowskaProp2LevelZero.apartmentPropertis = [
          new Property('Sypialnia','9,95'),
          new Property('Gabinet','9,94'),
          new Property('Salon','19,13'),
          new Property('Kuchnia','14,90'),
          new Property('Łazienka','4,00'),
          new Property('Przedpokój','7,07'),
      ];
      apartamentySlonecznaWadowskaProp2.levelProperties.push(apartamentySlonecznaWadowskaProp2LevelZero)
  
      let apartamentySlonecznaWadowskaProp3 = new ApartmentPropertise();
      apartamentySlonecznaWadowskaProp3.apartmentName = 'Mieszkanie nr 5 na parterze 69,28 m2';
  
      let apartamentySlonecznaWadowskaProp3LevelZero = new LevelProperties();
      apartamentySlonecznaWadowskaProp3LevelZero.levelInformation = 'poziom 0 - parter 69,28 m2'
      apartamentySlonecznaWadowskaProp3LevelZero.apartmentPropertis = [
          new Property('Sypialnia','9,94'),
          new Property('Gabinet','9,95'),
          new Property('Salon','19,00'),
          new Property('Kuchnia','10,32'),
          new Property('Łazienka','4,00'),
          new Property('Przedpokój','7,07'),
      ];
  
      apartamentySlonecznaWadowskaProp3.levelProperties.push(apartamentySlonecznaWadowskaProp3LevelZero);
  
      let apartamentySlonecznaWadowskaProp4 = new ApartmentPropertise();
      apartamentySlonecznaWadowskaProp4.apartmentName = 'Mieszkanie nr 2, pierwsze piętro i podasze 101,42 m2.';
  
      let apartamentySlonecznaWadowskaProp4LevelFirst = new LevelProperties();
      apartamentySlonecznaWadowskaProp4LevelFirst.levelInformation = 'poziom 1 - pierwsze pietro 54,28 m2'
      apartamentySlonecznaWadowskaProp4LevelFirst.apartmentPropertis = [
          new Property('Salon','37,78'),
          new Property('Kuchnia ','10,48'),
          new Property('Łazienka','1,75'),
          new Property('Przedpokój','3,50'),
          new Property('Garderoba','0,77'),
      ];
  
      let apartamentySlonecznaWadowskaProp4LevelAttic = new LevelProperties();
      apartamentySlonecznaWadowskaProp4LevelAttic.levelInformation = 'poziom 2 - podasze 47.14 m2'
      apartamentySlonecznaWadowskaProp4LevelAttic.apartmentPropertis = [
          new Property('Pokój','15,95'),
          new Property('Pokój','10,91'),
          new Property('Pokój','7, 35'),
          new Property('Łazienka','4, 23'),
          new Property('Przedpokój ','8,70'),
      ];
      apartamentySlonecznaWadowskaProp4.levelProperties.push(
        apartamentySlonecznaWadowskaProp4LevelFirst,
        apartamentySlonecznaWadowskaProp4LevelAttic);
  
      let apartamentySlonecznaWadowskaProp5 = new ApartmentPropertise();
      apartamentySlonecznaWadowskaProp5.apartmentName = 'Mieszkanie nr 4, pierwsze piętro i podasze 108,92 m2.';
  
      let apartamentySlonecznaWadowskaProp5LevelFirst = new LevelProperties();
      apartamentySlonecznaWadowskaProp5LevelFirst.levelInformation = 'poziom 1 - pierwsze pietro 61,78 m2'
      apartamentySlonecznaWadowskaProp5LevelFirst.apartmentPropertis = [
          new Property('Salon','40,86'),
          new Property('Kuchnia ','14,90'),
          new Property('Łazienka','1,75'),
          new Property('Przedpokój','3,50'),
          new Property('Garderoba','0,77'),
      ];
  
      let apartamentySlonecznaWadowskaProp5LevelAttic = new LevelProperties();
      apartamentySlonecznaWadowskaProp5LevelAttic.levelInformation = 'poziom 2 - podasze 47.14 m2'
      apartamentySlonecznaWadowskaProp5LevelAttic.apartmentPropertis = [
          new Property('Pokój','15,95'),
          new Property('Pokój','10,91'),
          new Property('Pokój','7,35'),
          new Property('Łazienka','4,23'),
          new Property('Przedpokój ','8,70'),
      ];
  
      apartamentySlonecznaWadowskaProp5.levelProperties.push(
        apartamentySlonecznaWadowskaProp5LevelFirst,
        apartamentySlonecznaWadowskaProp5LevelAttic);
  
  
      let apartamentySlonecznaWadowskaProp6 = new ApartmentPropertise();
      apartamentySlonecznaWadowskaProp6.apartmentName = 'Mieszkanie nr  6, pierwsze piętro i podasze 113,06 m2.';
      
      let apartamentySlonecznaWadowskaProp6LevelFirst = new LevelProperties();
      apartamentySlonecznaWadowskaProp6LevelFirst.levelInformation = 'poziom 1 - pierwsze pietro 66,01 m2'
      apartamentySlonecznaWadowskaProp6LevelFirst.apartmentPropertis = [
              new Property('Salon','40,67'),
              new Property('Kuchnia ','19,32'),
              new Property('Łazienka','1,75'),
              new Property('Przedpokój','3,50'),
              new Property('Garderoba','0,77'),
      ];
      
      let apartamentySlonecznaWadowskaProp6LevelAttic = new LevelProperties();
      apartamentySlonecznaWadowskaProp6LevelAttic.levelInformation = 'poziom 2 - podasze 47.05 m2'
      apartamentySlonecznaWadowskaProp6LevelAttic.apartmentPropertis = [
              new Property('Pokój','15,91'),
              new Property('Pokój','10,86'),
              new Property('Pokój','7,35'),
              new Property('Łazienka','4,23'),
              new Property('Przedpokój ','8,70'),
      ];
      
      apartamentySlonecznaWadowskaProp6.levelProperties.push(
        apartamentySlonecznaWadowskaProp6LevelFirst,
        apartamentySlonecznaWadowskaProp6LevelAttic);
      
      
        apartamentySlonecznaWadowska.apartmentPropertise.push(
            apartamentySlonecznaWadowskaProp1,
            apartamentySlonecznaWadowskaProp2,
            apartamentySlonecznaWadowskaProp3,
            apartamentySlonecznaWadowskaProp4,
            apartamentySlonecznaWadowskaProp5,
            apartamentySlonecznaWadowskaProp6)
  
      /// UNRUGA END ///////////////////////////////////////////////
  
      /// arkadiaEtapII START ///////////////////////////////////////////////
      let slonecznaWadowska = new House();
      slonecznaWadowska.realEstateName ='SŁONECZNA WADOWSKA';
      slonecznaWadowska.realEstateShortInfo = 'NOWA HUTA';
      slonecznaWadowska.realEstateDescription = `Słoneczna Wadowska to kameralne osiedle ośmiu domów jednorodzinnych w zabudowie bliźniaczej zlokalizowane w Nowej Hucie,  przy ul. Wadowskiej.
      Domy zaprojektowane zostały jako budynki jednopiętrowe z poddaszem użytkowym. Wykonywane są do stanu deweloperskiego, z możliwością wykończenia „pod klucz” według własnych preferencji nabywcy. 
      Pod względem jakościowym Słoneczna Wadowska  spełnia najwyższe standardy. Materiały wykorzystane do budowy domów oraz energooszczędna technologia zapewniają życie w warunkach zgodnych ze standardami ekologii.
      Styl architektury zabudowań utrzymany jest w prostej, ale ciepłej i eleganckiej estetyce i w połączeniu z przestronnym funkcjonalnym wnętrzem, pozwoli Państwu poczuć się wyjątkowo zamieszkując w tej urokliwej podmiejskiej, zielonej dzielnicy.
      Osiedle charakteryzuje się zielonym otoczeniem, niską zabudową jednorodzinną, bezpośrednim dostępem do komunikacji miejskiej, lokali handlowo-usługowych oraz placówek oświatowych.`
      slonecznaWadowska.realEstatePhotoUrl.push(
        'assets/sloneczna-wadowska/orginal1-1200x563.jpg',
        'assets/sloneczna-wadowska/orginal2-1200x750.jpg'
           ); 
    slonecznaWadowska.realEstateLocation = 'Nowa Huta ul. Wadowska, nr działek 84/2 i 84/3';
        slonecznaWadowska.realEstatePrice = '499 000 zł za dom 130 m2 z garażem i ogródkiem';
        slonecznaWadowska.constructionAcceptance = ' IV kwartał 2019';
        slonecznaWadowska.lngLatOfRealEstate = [19.999279,50.023316];
  
      let slonecznaWadowskaHouseProprtise = new HousePropertise();
      slonecznaWadowskaHouseProprtise.buildingsName = '1A, 2A, 3A, 4A';
      slonecznaWadowskaHouseProprtise.floorSurfaces = 132.15;
      slonecznaWadowskaHouseProprtise.functionalSurface = 128.80;
    
    
      slonecznaWadowskaHouseProprtise.groundFloor = [
          new Property('Garaż', '32.41'),
          new Property('Hall', '3.47'),
          new Property('Wiatrołap', '2.25'),
      ] 
  
      slonecznaWadowskaHouseProprtise.firstFloor = [
          new Property('Salon + jadalnia + kuchnia', '37.40'),
          new Property('Gabinet', '9.17'),
          new Property('WC', '2.96'),
      ] 

      slonecznaWadowskaHouseProprtise.attic = [
          new Property('Hall', '3.94'),
          new Property('Pokój 1', '9.04'),
          new Property('Pokój 2', '10.65'),
          new Property('Pokój', '11.90'),
          new Property('Garderoba', '0.61'),
          new Property('Łazienka', '5.00'),
      ] 
  
     
      let slonecznaWadowskaHouse2Proprtise = new HousePropertise();
      slonecznaWadowskaHouse2Proprtise.buildingsName = '1B, 2B, 3B, 4B';
      slonecznaWadowskaHouse2Proprtise.floorSurfaces = 132,51;
      slonecznaWadowskaHouse2Proprtise.functionalSurface = 129,46;
    
      slonecznaWadowskaHouse2Proprtise.groundFloor = [
          new Property('Garaż', '32.41'),
          new Property('Hall', '3.47'),
          new Property('Wiatrołap', '2.25'),
      ] 
  
      slonecznaWadowskaHouse2Proprtise.firstFloor = [
          new Property('Salon + jadalnia + kuchnia', '47.19'),
          new Property('WC', '2.96'),
      ] 

      slonecznaWadowskaHouse2Proprtise.attic = [
          new Property('Hall', '5.64'),
          new Property('Pokój 1', '9.12'),
          new Property('Pokój 2', '10.72'),
          new Property('Pokój 3', '9.13'),
          new Property('Garderoba', '1.57 '),
          new Property('Łazienka', '5.00'),
      ] 
  
      slonecznaWadowska.housePropertise.push(
          slonecznaWadowskaHouseProprtise,
        slonecznaWadowskaHouse2Proprtise);
      /// arkadiaEtapII END ///////////////////////////////////////////////
  
  
      this.forSaleRealEstateInvestments = [
        slonecznaWadowska,
         
      ];
     }
  
  }