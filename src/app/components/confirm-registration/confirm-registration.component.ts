import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss']
})
export class ConfirmRegistrationComponent implements OnInit {
  showSuccess: boolean | undefined;
  showError: boolean | undefined;
  errorMessage: string | undefined;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.confirmRegistration();
  }

  async confirmRegistration() {
    const token = this.route.snapshot.queryParams['token'];

    this.authService.getRegistrationConfirmation(token).subscribe({
      next: (_) => this.showSuccess = true,
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message;
      }
    });
  }
}
