import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IPadressComponent } from './ipadress/ipadress.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { DemoMapComponent } from './demo-map/demo-map.component';


const routes: Routes = [
 

 
  { path: 'ip', component: IPadressComponent },
  { path: 'geo', component: GeolocationComponent },
  { path: 'map', component: DemoMapComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
