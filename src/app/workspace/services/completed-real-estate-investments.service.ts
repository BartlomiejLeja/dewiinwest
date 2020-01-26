import { Injectable } from '@angular/core';
import { RealEstate, Apartment, House } from '../models/real-estate.model';
import { ApartmentPropertise, LevelProperties } from '../models/apartment-propertise.model';
import { Property } from '../models/property.model';
import { HousePropertise } from '../models/house-propertise.model';

@Injectable({
  providedIn: 'root',
})
export class CompletedRealEstateInvestmentsService {

  public completedRealEstateInvestments: RealEstate[];
  constructor() {

    /// UNRUGA START ///////////////////////////////////////////////
    let apartamentyUnruga = new Apartment();
    apartamentyUnruga.realEstateName = 'APARTAMENTY UNRUGA';
    apartamentyUnruga.realEstateShortInfo = 'SKOTNIKI';
    apartamentyUnruga.realEstateDescription = `Dewi Invest realizuje budowę, kameralnego kompleksu 6 apartamentów w zacisznej, zielonej dzielnicy Krakowa – Skotniki, przy ulicy Unruga/Winnicka.
    Prezentowana inwestycja to nowe dwu-poziomowe mieszkania w zabudowie szeregowej. Całe przedwsięzięcie zakłada budowę 6 apartamentów z garażami  i pomieszczeniami gospodarczymi. Budynki posiadają 3 kondynacje naziemne.
    Mieszkania usytuowane są na pierwszym, drugim piętrze i poddaszu.
    Nowoczesna architektura budowli powstała z myślą o najbardziej wymagających klientach, dla których funkcjonalność, luksus oraz niepowtarzalna lokalizacja muszą iść w parze.
    Niewątpliwie największym atutem powyższej inwestycji jest zielona i cicha okolica . Jest to wspaniała lokalizacja dla osób ceniących spokój, ciszę, przy jednocześnie bliskim dostępie do szybkiej komunikacji aby móc w przeciągu kwadransa dostać się do serca Krakowa a także z łatwym i krótkim dostępem do obwodnicy Miasta.
    Mimo, że inwestycja  usytuowana jest w zacisznym miejscu , to jest świetnie skomunikowana z innymi dzielnicami. Dzięki takiej lokalizacji mieszkańcy Apartamentów Unruga, nie muszą wybierać między ciszą, a komfortowym dostępem do miejsc codziennej użyteczności.
    Sąsiedztwo  stanowią nowe domy jednorodzinne i zieleń parkowa . Lokalizacja mini osiedla zapewnia wygodny dostęp do pobliskich sklepów, przedszkoli, szkół i klubów.
    Nowoczesna architektura domów powstała z myślą o najbardziej wymagających klientach, dla których funkcjonalność, luksus oraz niepowtarzalna lokalizacja muszą iść w parze.`
    apartamentyUnruga.realEstatePhotoUrl.push(
    'assets/apartamenty-unruga/orginal2-1200x750.png',
    'assets/apartamenty-unruga/orginal1-1200x750.png',
    'assets/apartamenty-unruga/orginal3-1200x750.png'
    ); 
    apartamentyUnruga.realEstateLocation = 'Krakowa – Skotniki, przy ulicy Unruga/Winnicka';
    apartamentyUnruga.realEstatePrice = '520.000 zł za dwupoziomowy apartament 108,92 m2, lub  540.000 zł za apartament o pow. 113,06 m2';
    apartamentyUnruga.constructionAcceptance = 'III kwartał 2018';
    apartamentyUnruga.additionalInformation =`Do każdego apartamentu  przynależy miejsce postojowe w   garażu   kw w cenie 20 .000 zł i pomieszczenie gospodarcze o powierzchni  od 5,45 m kw do  17,42 m kw w cenie 2000 zł /m kw
     Mieszkanie sprzedawane jest w stanie deweloperskim, do własnej aranżacji.`

    let apartamentyUnrugaProp1 = new ApartmentPropertise();
    apartamentyUnrugaProp1.apartmentName = 'Mieszkanie nr 1 na parterze 57,45 m2';
    apartamentyUnruga.lngLatOfRealEstate = [19.999279,50.023316];

    let apartamentyUnrugaProp1LevelZero = new LevelProperties()
    apartamentyUnrugaProp1LevelZero.levelInformation = 'poziom 0 - parter 57,45 m2'
    apartamentyUnrugaProp1LevelZero.apartmentPropertis = [
        new Property('Sypialnia','9,95'),
        new Property('Gabinet','9,94'),
        new Property('Salon','16,01'),
        new Property('Kuchnia','10,48'),
        new Property('Łazienka','4,00'),
        new Property('Przedpokój','7,07'),
    ];
    
    apartamentyUnrugaProp1.levelProperties.push(
        apartamentyUnrugaProp1LevelZero
    )
  
    let apartamentyUnrugaProp2 = new ApartmentPropertise();
    apartamentyUnrugaProp2.apartmentName = 'Mieszkanie nr 3 na parterze 64,99 m2';

    let apartamentyUnrugaProp2LevelZero = new LevelProperties()
    apartamentyUnrugaProp2LevelZero.levelInformation = 'poziom 0 - parter 64,99 m2'
    apartamentyUnrugaProp2LevelZero.apartmentPropertis = [
        new Property('Sypialnia','9,95'),
        new Property('Gabinet','9,94'),
        new Property('Salon','19,13'),
        new Property('Kuchnia','14,90'),
        new Property('Łazienka','4,00'),
        new Property('Przedpokój','7,07'),
    ];
    apartamentyUnrugaProp2.levelProperties.push(apartamentyUnrugaProp2LevelZero)

    let apartamentyUnrugaProp3 = new ApartmentPropertise();
    apartamentyUnrugaProp3.apartmentName = 'Mieszkanie nr 5 na parterze 69,28 m2';

    let apartamentyUnrugaProp3LevelZero = new LevelProperties();
    apartamentyUnrugaProp3LevelZero.levelInformation = 'poziom 0 - parter 69,28 m2'
    apartamentyUnrugaProp3LevelZero.apartmentPropertis = [
        new Property('Sypialnia','9,94'),
        new Property('Gabinet','9,95'),
        new Property('Salon','19,00'),
        new Property('Kuchnia','10,32'),
        new Property('Łazienka','4,00'),
        new Property('Przedpokój','7,07'),
    ];

    apartamentyUnrugaProp3.levelProperties.push(apartamentyUnrugaProp3LevelZero);

    let apartamentyUnrugaProp4 = new ApartmentPropertise();
    apartamentyUnrugaProp4.apartmentName = 'Mieszkanie nr 2, pierwsze piętro i podasze 101,42 m2.';

    let apartamentyUnrugaProp4LevelFirst = new LevelProperties();
    apartamentyUnrugaProp4LevelFirst.levelInformation = 'poziom 1 - pierwsze pietro 54,28 m2'
    apartamentyUnrugaProp4LevelFirst.apartmentPropertis = [
        new Property('Salon','37,78'),
        new Property('Kuchnia ','10,48'),
        new Property('Łazienka','1,75'),
        new Property('Przedpokój','3,50'),
        new Property('Garderoba','0,77'),
    ];

    let apartamentyUnrugaProp4LevelAttic = new LevelProperties();
    apartamentyUnrugaProp4LevelAttic.levelInformation = 'poziom 2 - podasze 47.14 m2'
    apartamentyUnrugaProp4LevelAttic.apartmentPropertis = [
        new Property('Pokój','15,95'),
        new Property('Pokój','10,91'),
        new Property('Pokój','7, 35'),
        new Property('Łazienka','4, 23'),
        new Property('Przedpokój ','8,70'),
    ];
    apartamentyUnrugaProp4.levelProperties.push(
        apartamentyUnrugaProp4LevelFirst,
        apartamentyUnrugaProp4LevelAttic);

    let apartamentyUnrugaProp5 = new ApartmentPropertise();
    apartamentyUnrugaProp5.apartmentName = 'Mieszkanie nr 4, pierwsze piętro i podasze 108,92 m2.';

    let apartamentyUnrugaProp5LevelFirst = new LevelProperties();
    apartamentyUnrugaProp5LevelFirst.levelInformation = 'poziom 1 - pierwsze pietro 61,78 m2'
    apartamentyUnrugaProp5LevelFirst.apartmentPropertis = [
        new Property('Salon','40,86'),
        new Property('Kuchnia ','14,90'),
        new Property('Łazienka','1,75'),
        new Property('Przedpokój','3,50'),
        new Property('Garderoba','0,77'),
    ];

    let apartamentyUnrugaProp5LevelAttic = new LevelProperties();
    apartamentyUnrugaProp5LevelAttic.levelInformation = 'poziom 2 - podasze 47.14 m2'
    apartamentyUnrugaProp5LevelAttic.apartmentPropertis = [
        new Property('Pokój','15,95'),
        new Property('Pokój','10,91'),
        new Property('Pokój','7,35'),
        new Property('Łazienka','4,23'),
        new Property('Przedpokój ','8,70'),
    ];

    apartamentyUnrugaProp5.levelProperties.push(
        apartamentyUnrugaProp5LevelFirst,
        apartamentyUnrugaProp5LevelAttic);


    let apartamentyUnrugaProp6 = new ApartmentPropertise();
    apartamentyUnrugaProp6.apartmentName = 'Mieszkanie nr  6, pierwsze piętro i podasze 113,06 m2.';
    
    let apartamentyUnrugaProp6LevelFirst = new LevelProperties();
    apartamentyUnrugaProp6LevelFirst.levelInformation = 'poziom 1 - pierwsze pietro 66,01 m2'
    apartamentyUnrugaProp6LevelFirst.apartmentPropertis = [
            new Property('Salon','40,67'),
            new Property('Kuchnia ','19,32'),
            new Property('Łazienka','1,75'),
            new Property('Przedpokój','3,50'),
            new Property('Garderoba','0,77'),
    ];
    
    let apartamentyUnrugaProp6LevelAttic = new LevelProperties();
    apartamentyUnrugaProp6LevelAttic.levelInformation = 'poziom 2 - podasze 47.05 m2'
    apartamentyUnrugaProp6LevelAttic.apartmentPropertis = [
            new Property('Pokój','15,91'),
            new Property('Pokój','10,86'),
            new Property('Pokój','7,35'),
            new Property('Łazienka','4,23'),
            new Property('Przedpokój ','8,70'),
    ];
    
    apartamentyUnrugaProp6.levelProperties.push(
            apartamentyUnrugaProp6LevelFirst,
            apartamentyUnrugaProp6LevelAttic);
    
    
    apartamentyUnruga.apartmentPropertise.push(
        apartamentyUnrugaProp1,
        apartamentyUnrugaProp2,
        apartamentyUnrugaProp3,
        apartamentyUnrugaProp4,
        apartamentyUnrugaProp5,
        apartamentyUnrugaProp6)

    /// UNRUGA END ///////////////////////////////////////////////

    /// arkadiaEtapII START ///////////////////////////////////////////////
    let arkadiaEtapII = new House();
    arkadiaEtapII.realEstateName ='ARKADIA ETAP II';
    arkadiaEtapII.realEstateShortInfo = 'KOKOTÓW';
    arkadiaEtapII.realEstateDescription = `Arkadia Kokotów etap II to kolejny etap inwestycji  zlokalizowanej na granicy Krakowa i Wieliczki, wśród  terenów zielonych. To  propozycja dla rodzin oraz osób ceniących sobie spokój, a jednocześnie bliskość centrum miasta.
    Inwestycje tworzy 20 domów jednorodzinnych w zabudowie bliźniaczej ( w pierwszym etapie 16 domów).
    Elegancki design budynków Arkadii w połączeniu z funkcjonalnym, przestronnym wnętrzem oraz praktycznym zagospodarowaniem terenu składają się na niepowtarzalny klimat tego miejsca.
    Bliskość  obwodnicy  pozwoli dotrzeć do centrum Krakowa w 10 minut.
    Infrastruktura w Kokotowie jest bardzo dobrze rozwinięta i znajdziecie Państwo wszystkie sklepy i punkty usługowe gwarantujące odpowiedni komfort życia.
    Tereny wokół sprzyjają rekreacji, turystyce pieszej i rowerowej, jest więc to idealne miejsce dla ludzi ceniących bliskość z naturą.
    Niezależność, bezpieczeństwo, przestrzeń oraz cisza i spokój…, to wszystko zapewni Państwu nowo powstające Osiedle Arkadia Kokotów. Po zgiełku miejskiego życia przed mieszkańcami Osiedla Arkadia Kokotów pojawia się możliwość wyciszenia i wypoczynku w przyjaznym otoczeniu malowniczej przyrody.`
    arkadiaEtapII.realEstatePhotoUrl.push(
        'assets/arkadia-kokotow-etap-2/0_1-Kokotow-1200x675.jpg',
        'assets/arkadia-kokotow-etap-2/0_2-Kokotow-1200x675.jpg',
        'assets/arkadia-kokotow-etap-2/0_4-Kokotow-b-1200x675.jpg',
        'assets/arkadia-kokotow-etap-2/0_5-Kokotow-b-1200x675.jpg'
         ); 
    arkadiaEtapII.realEstateLocation = 'Kolonia Kokotów – gmina Wieliczka';
    arkadiaEtapII.realEstatePrice = '479.000 zł za dom 142 m2. wraz z działką ok. 5 arów.';
    arkadiaEtapII.constructionAcceptance = 'II kwartał 2018';
    arkadiaEtapII.lngLatOfRealEstate = [19.999279,50.023316];

    let arkadiaEtapIIHouseProprtise = new HousePropertise();
    arkadiaEtapIIHouseProprtise.buildingsName = 'A B';
    arkadiaEtapIIHouseProprtise.floorSurfaces = 142.09;
    arkadiaEtapIIHouseProprtise.functionalSurface = 119.24;
  
  
    arkadiaEtapIIHouseProprtise.groundFloor = [
        new Property('Salon + jadalnia', '34.60'),
        new Property('Kuchnia', '7.73'),
        new Property('Hall', '2.04'),
        new Property('Wiatrołap', '5.14'),
        new Property('Łazienka', '3.59'),
        new Property('Garaż', '17.92'),
        new Property('Pom. gospodarcze', '4.93'),
    ] 

    arkadiaEtapIIHouseProprtise.firstFloor = [
        new Property('Pokój', '10.52'),
        new Property('Pokój', '12.94'),
        new Property('Łazienka', '8.90'),
        new Property('Pokój', '10.83'),
        new Property('Łazienka', '3.59'),
        new Property('Pokój', '19.16'),
        new Property('Komunikacja', '3.79'),
    ] 
 
    arkadiaEtapII.housePropertise.push(arkadiaEtapIIHouseProprtise);
    /// arkadiaEtapII END ///////////////////////////////////////////////

    this.completedRealEstateInvestments = [
        apartamentyUnruga,
        arkadiaEtapII
    ];
   }

}