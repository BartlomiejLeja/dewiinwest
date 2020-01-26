import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeTabComponent } from '../workspace/welcome-tab/welcome-tab.component';
import { RealEstateComponent } from '../workspace/real-estate/real-estate.component';
import { ContactComponent } from '../workspace/contact/contact.component';
import { AboutUsComponent } from '../workspace/about-us/about-us.component';
import { RealEstateListComponent } from '../workspace/real-estate-list/real-estate-list.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children : [
            {
                path: '',
                component: WelcomeTabComponent
            },
            {
                path: 'realestate/:realestatename',
                component: RealEstateComponent
            },
            {
                path: 'kontakt',
                component: ContactComponent
            },
            {
                path: 'onas',
                component:  AboutUsComponent
            },
            {
                path: 'inwestycjezakonczone',
                component: RealEstateListComponent
            },
            {
                path: 'inwestycjeaktualne',
                component: RealEstateListComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutShellRouting { }