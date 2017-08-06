import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {User} from './../user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : FormGroup;

  constructor() { }

  ngOnInit() {
    //instantiate the FormGroup model
    this.user = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(2)]),
      account : new FormGroup({
        email : new FormControl('', Validators.required),
        confirm : new FormControl('', Validators.required)
      })
    });
  }

  //onSubmit({ value, valid }: { value: User, valid: boolean }) {
  //  console.log(value, valid);
  //}

   onSubmit() {
     console.log(this.user.value, this.user.valid);
   }

}
