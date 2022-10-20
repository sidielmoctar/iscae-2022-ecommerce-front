import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin} from "./models/ilogin";
import {ILoginResp} from "./models/ilogin-resp";
import {Observable} from "rxjs";

@Injectable()
export class AuthentificationService {

  constructor(private httpClient: HttpClient) { }

  logIn(loginObj: ILogin): Observable<ILoginResp> {
    return this.httpClient.post<ILoginResp>("http://sup-er-app.herokuapp.com/apis/loginclient/", loginObj);
  }

  logOut() {

  }
}
