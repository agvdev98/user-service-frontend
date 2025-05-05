import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) { return; }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: response => {
        // localStorage.setItem('token', response.token);
        alert('Login successful');
        this.router.navigate(['/dashboard']);
      },
      error: error => {
        console.error('Login failed: ', error);
      }
    });
  }

}
