import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'jnex-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  form: FormGroup;

  loginError: Array<String> = [];

  constructor() {
  }

  loginFormSubmit(md) {
    this.loginError = [];
    this.error(md.username);
    console.log(md);
  }

  error(error) {
    this.loginError.push(error);
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

}
