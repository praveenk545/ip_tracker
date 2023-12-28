import { Component, OnInit } from '@angular/core';

//global varibale
declare const L: any;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
})
export class GeolocationComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('geoLocation is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat:${position.coords.latitude}, long: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView([latLong], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mymap);

      let marker = L.marker([latLong]).addTo(mymap);
      marker.bindPopup('<b>Hello</b>').openPopup();

      let popup = L.popup()
        .setLatLng([latLong])
        .setContent('I am a popup.')
        .openOn(mymap);
    });
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLong = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat:${position.coords.latitude}, long: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}
