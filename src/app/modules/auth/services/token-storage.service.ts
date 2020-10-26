import { Injectable } from '@angular/core';

const TOKEN = 'auth-token';
@Injectable({
	providedIn: 'root'
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
		window.sessionStorage.clear();
	}

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.setItem(TOKEN, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN);
  }
}
