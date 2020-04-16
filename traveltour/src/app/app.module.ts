import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FullSearchComponent } from './main-component/full-search/full-search.component';
import { BestCheapComponent } from './main-component/best-cheap/best-cheap.component';
import { WeatherComponent } from './main-component/weather/weather.component';
import { AppRoutingModule } from './app-route.model';
import { FlightsComponent } from './flights/flights.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponentComponent,
    FullSearchComponent,
    BestCheapComponent,
    WeatherComponent,
    FlightsComponent,
    WhyUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
