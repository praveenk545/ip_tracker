import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivComponent } from './reactiv/reactiv.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResultSummaryComponent } from './result-summary/result-summary.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { DictionaryWebComponent } from './dictionary-web/dictionary-web.component';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './dictionary-web/apixu.service';
import { RemovePipe } from './dictionary-web/dictionary-web.component';
import { IPadressComponent } from './ipadress/ipadress.component';
import { ipService } from './ipadress/ip.service';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { ExampleComponent } from './example/example.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactivComponent,
    DashboardComponent,
    ResultSummaryComponent,
    ECommerceComponent,
    DictionaryWebComponent,
    IPadressComponent,
    GeolocationComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ApixuService, ipService],
  bootstrap: [AppComponent],
})
export class AppModule {}
