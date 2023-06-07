import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/service/auth.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private showError: boolean | undefined;
  private errorMessage: string | undefined;
  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  public form = this.formBuilder.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })
  ngOnInit(): void {
  }

  async onSubmit() {
    const body = {...this.form.value};
    console.log(body);
    await this.authService.login({username: body.email, password: body.password}).subscribe({
      next: (_) => this.router.navigate(['/task']),
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message;
      }
    });;

  }
}
