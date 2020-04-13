import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FullSearchComponent } from './main-component/full-search/full-search.component';
import { BestCheapComponent } from './main-component/best-cheap/best-cheap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponentComponent,
    FullSearchComponent,
    BestCheapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
