import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'jnex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(4)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

}
