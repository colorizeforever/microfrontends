import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {UsersI} from '../../../../models/users.model'
import {environment} from "../../../../../environments/environment";


@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  public getUsers(count: number, offset: number): Observable<UsersI> {
    return this.http.get<UsersI>(`${environment.BACK_URL}/users?count=${count}&offset=${offset}`)
  }


}
