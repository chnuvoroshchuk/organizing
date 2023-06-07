import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isAuthorized = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthorized = this.authService.isAuthenticated();
  }

  async handleAuthClick() {
    if (this.isAuthorized) {
      await this.authService.logOut().toPromise();
      this.isAuthorized = false;
    }

    await this.router.navigate(['/login']);
  }
}
