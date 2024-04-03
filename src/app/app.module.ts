import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { HttpClientModule } from '@angular/common/http';

import { IPadressComponent } from './ipadress/ipadress.component';
import { ipService } from './ipadress/ip.service';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { DemoMapComponent } from './demo-map/demo-map.component';

@NgModule({
  declarations: [
    AppComponent,
    IPadressComponent,
    GeolocationComponent,
    DemoMapComponent,
    
  ],
  imports: [
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    // }),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ ipService],
  bootstrap: [AppComponent],
})
export class AppModule {}
