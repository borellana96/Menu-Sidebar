import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.formValidator();
  }

  formValidator(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.minLength(4)]]
    });
  }

  public login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    } else {
      console.log("Form Not Valid");
    }
  }

}
