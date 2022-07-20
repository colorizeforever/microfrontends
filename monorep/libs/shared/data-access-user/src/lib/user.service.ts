import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../enviroments/environment";
import { HttpClient } from "@angular/common/http";
import { AuthModel } from "../models/auth.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  login(authData: AuthModel): Observable<Record<string, string>> {
    return this.http.post<Record<string, string>>(`${environment.BACK_URL}/auth/login`, { authData });
  }

  registration(authData: AuthModel): Observable<Record<string, string>> {
    return this.http.post<Record<string, string>>(`${environment.BACK_URL}/auth/login`, { authData });
  }

}
