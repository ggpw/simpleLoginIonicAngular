import { Component, OnInit, OnChanges } from '@angular/core';
import {Validators, ValidatorFn, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnChanges {

  user: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService ) {
    this.user = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', [Validators.required, PasswordValidator.PasswordNotEqual]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

  ngOnChanges() {
    console.log('this.user ', this.user);
  }

  register() {
    console.log(this.user.value);
    this.authService.register(this.user.value);
  }

}

  export class PasswordValidator {
    static PasswordNotEqual(control: AbstractControl) {
      console.log(control);
      const rePassword = control.value;
      const password = control.parent ? control.parent.value.password : '';
      const passwordsNotEqual = rePassword === password ? null : { passwordsNotEqual: true };
      return passwordsNotEqual;
    }
  }
