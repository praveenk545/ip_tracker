import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  faArrowAltCircleRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { ipService } from './ip.service';

@Component({
  selector: 'app-ipadress',
  templateUrl: './ipadress.component.html',
  styleUrls: ['./ipadress.component.css'],
})
export class IPadressComponent implements OnInit {
  ip: any;
  ipData: any;

  icons = { faArrowAltCircleRight, faArrowRight };

  constructor(private formBuilder: FormBuilder, private ipService: ipService) {}
  ngOnInit(): void {
    this.ip = this.formBuilder.group({ location: [''] });
  }
  ipadressfind(formValues: any) {
    this.ipService.getIPvalue(formValues.location).subscribe((data) => {
      this.ipData = Array.of(data);
      console.log('IPADDRESS', this.ipData);
    });
  }

  search() {}
}
