import { MainComponentComponent } from './main-component/main-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { ContactComponent } from './contact/contact.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { PageThanksComponent } from './page-thanks/page-thanks.component';


const appRoute: Routes = [
    { 'path': "", redirectTo: '/home', pathMatch: 'full' },
    { 'path': "home", 'component': MainComponentComponent },
    { 'path': "flights", 'component': FlightsComponent },
    { 'path': "why-us", 'component': WhyUsComponent },
    { 'path': "contact", 'component': ContactComponent },
    { 'path': "thanks", 'component': PageThanksComponent }

]
@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

