import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';

import {AppConfig } from '../../../app.config';

@Injectable()
export class FileUploadService
{
    constructor(private _http: Http, private appConfig: AppConfig)
    { }


    UploadXHR(file: File, progress?: Function, complete?: Function, error?: Function)
    {
  //    let url = this.appConfig.GetBaseUrl() + '/api/file';
      let url = "http://localhost:5000/api/file";

        let xhr = new XMLHttpRequest();

        if (file != null) {
            xhr.addEventListener('load', e => {
                if (xhr.readyState == 4 && xhr.status == 200)
                    complete(xhr.response);
            });

            xhr.upload.addEventListener('progress', (e: ProgressEvent) => {
                if (e.lengthComputable) {
                    let value = (e.loaded / e.total) * 100;
                    progress(value.toFixed(2));
                }
            });

            xhr.open('POST', url);

            let postData = new FormData();

            postData.append('files', file, file.name);

            xhr.send(postData);

        }
        else
        {
            error("No Files to Upload");
            console.error("No File to Upload"); 
        }

    }

}
