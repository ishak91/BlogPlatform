import {Injectable } from '@angular/core';

@Injectable()
export class AppConfig
{
    private _baseUrl = "http://localhost:5000"
    private _baseApiUrl = "http://localhost:5000/api/admin";
  
    GetBaseApiUrl()
    {
        return this._baseApiUrl;
    }

    GetBaseUrl() {
      return this._baseUrl;
    }

}
