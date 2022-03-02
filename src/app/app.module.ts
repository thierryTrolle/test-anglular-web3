import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Web3appComponent } from './web3app/web3app.component';
import { DonwloadPageComponent } from './donwload-page/donwload-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Web3appComponent,
    DonwloadPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
