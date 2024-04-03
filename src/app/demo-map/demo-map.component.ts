import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-map',
  templateUrl: './demo-map.component.html',
  styleUrls: ['./demo-map.component.css']
})
export class DemoMapComponent {

  name: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
