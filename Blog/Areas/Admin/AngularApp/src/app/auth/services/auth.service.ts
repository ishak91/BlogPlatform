import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'Rxjs/Observable';

import { UserDetails} from '../models';

@Injectable()
export class AuthService {

    private authUrl: string = '/auth';

    constructor(private _http: Http)
    { }

    public IsAuthenticated() {

        return this._http.get(this.authUrl + "/IsAuthenticated").map(res => res.json());
    }

    public GetUserInfo(): Observable<UserDetails>
    {
        return this._http.get(this.authUrl + "/details").map(res => res.json());
    }

}