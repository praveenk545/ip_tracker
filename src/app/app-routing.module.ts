import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivComponent } from './reactiv/reactiv.component';
import { DictionaryWebComponent } from './dictionary-web/dictionary-web.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { IPadressComponent } from './ipadress/ipadress.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { ResultSummaryComponent } from './result-summary/result-summary.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  { path: 'hi', component: ReactivComponent },
  { path: 'dict', component: DictionaryWebComponent },
  { path: 'ec', component: ECommerceComponent },
  { path: 'ip', component: IPadressComponent },
  { path: 'geo', component: GeolocationComponent },
  { path: 'result', component: ResultSummaryComponent },
  { path: 'ex', component: ExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
