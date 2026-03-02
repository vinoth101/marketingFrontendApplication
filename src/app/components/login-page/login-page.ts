import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {
  userType: 'customer' | 'influencer' = 'customer';
  mode: 'login' | 'register' = 'login';
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['user'] === 'influencer') {
        this.userType = 'influencer';
      } else {
        this.userType = 'customer';
      }
      this.buildForm();
    });
  }

  buildForm() {
    if (this.mode === 'login') {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        remember: [false],
      });
    } else {
      if (this.userType === 'customer') {
        this.form = this.fb.group({
          fullName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.required],
          password: ['', Validators.required],
          business: [''],
          industry: ['', Validators.required],
        });
      } else {
        this.form = this.fb.group({
          fullName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.required],
          password: ['', Validators.required],
          platform: ['', Validators.required],
          profileUrl: ['', Validators.required],
          followers: ['', Validators.required],
          category: ['', Validators.required],
        });
      }
    }
  }

  toggleUserType(type: 'customer' | 'influencer') {
    if (this.userType !== type) {
      this.userType = type;
      this.buildForm();
    }
  }

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
    this.buildForm();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('submit', this.mode, this.userType, this.form.value);
      // send to backend or navigate
    }
  }
}
