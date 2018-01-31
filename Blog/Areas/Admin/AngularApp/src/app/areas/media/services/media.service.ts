import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'Rxjs/Observable'

import { AppConfig } from '../../../app.config';

import { File } from '../models'

@Injectable()
export class MediaService {
    private url: string = "/media"

    constructor(private _http: Http, private _appConfig: AppConfig) {
        this.Init();
    }

    private Init() {
        this.url = this._appConfig.GetBaseApiUrl + this.url;
    }

    GetAll(): Observable<Array<File>> {
        return this._http.get(this.url).map(res => res.json());
    }

    Delete(id: number): Observable<any> {
        return this._http.delete(this.url + "/" + id);
    }

    GetByType(type: string): Observable<Array<File>>
    {
        return this._http.get(this.url + "/filetype/" + type).map(res => res.json());
    }
    
    GetById(id: number): Observable<File> {
        return this._http.get(this.url + "/id/" + id).map(res => res.json());
    }

    GetByFileName(fileName: string): Observable<Array<File>> {
        return this._http.get(this.url + "/filetype/" + fileName).map(res => res.json());
    }
    
}
