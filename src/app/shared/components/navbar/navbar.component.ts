import { Component } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Router, RouterModule } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: 'app-navbar',
  imports: [MatIcon, MatToolbar, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  user: any;

  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.storage.getUser();
  }

  logout(): void {
    this.storage.clear();
    this.router.navigate(['/auth/login']);
  }
}
