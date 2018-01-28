import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Post } from '../models';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    url: string = "http://localhost:5000/api/Post";
    constructor(private _http: Http)
    { }

    CreateNewPost(post) {
        return this._http.post(this.url, post).map(res => res.json());
    }

    GetAllPosts(): Observable<Post[]>
    {
        return this._http.get(this.url).map(res => res.json());
    }

    GetPost(id: number): Observable<Post>
    {
        return this._http.get(this.url + "/" + id).map(res => res.json());
    }

    DeletePost(id: number): Observable<Post>
    {
        return this._http.delete(this.url + "/" + id).map(res => res.json());
    }



}