import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../core/service/auth.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public userForm = this.formBuilder.group({
    username: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    const body = {...this.userForm.value};
    await this.authService.sendRequestForRegistration(body).toPromise();
    console.log(body);
    await this.router.navigate(['/confirm-account'])
  }
}
