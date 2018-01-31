import {Injectable } from '@angular/core';

@Injectable()
export class AppConfig
{
    private _baseUrl = "http://localhost:5000"
    private _baseApiUrl = "http://localhost:5000/api/admin";

    get GetBaseApiUrl(): string
    {
        return this._baseApiUrl;
    }

    get GetBaseUrl(): string {
      return this._baseUrl;
    }

    

}
