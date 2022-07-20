import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private router: Router
  ) { }

  signIn(login: string, password: string): void {
    if(login === 'test' && password === 'test') {
        localStorage.setItem('token', JSON.stringify(true))
        this.router.navigate(['microfrontend'])
    }
  }
}
