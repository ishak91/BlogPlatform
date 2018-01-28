import {Injectable } from '@angular/core';

@Injectable()
export class AppConfig
{
    private _baseApiUrl = "http://localhost:5000/api";
    
    GetBaseApiUrl()
    {
        return this._baseApiUrl;
    }

}