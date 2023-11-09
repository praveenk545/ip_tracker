import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  Form,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiv',
  templateUrl: './reactiv.component.html',
  styleUrls: ['./reactiv.component.css'],
})
export class ReactivComponent implements OnInit {
  isTrySubmit: boolean = false;
  constructor() {}
  ngOnInit(): void {}

  s = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });
  user() {
    console.log('hi');
    console.log(this.s);
    this.isTrySubmit = true;
    if (this.s.valid) {
      let user = this.s.value;
      console.log(user);
    }
  }
}
