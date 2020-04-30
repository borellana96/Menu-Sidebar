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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    //this.formValidator();
  }

  formValidator(): void {
    this.loginForm = this.fb.group({
      dni: ['', [Validators.minLength(8), Validators.maxLength(8)]],
      password: ['', [Validators.minLength(4)]]
    });
  }

  public login(email: string, password: string) {
    let user: User = {
      username: email,
      password: password
    };
    this.authService.login(user);
  }

}
