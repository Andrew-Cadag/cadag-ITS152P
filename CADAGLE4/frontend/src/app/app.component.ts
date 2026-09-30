import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  path = window.location.pathname;

  constructor(public tokenStorage: TokenStorageService) { }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.href = '/';
  }
}
