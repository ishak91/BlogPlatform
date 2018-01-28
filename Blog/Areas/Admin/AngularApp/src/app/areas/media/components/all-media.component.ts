import { Component, OnInit } from '@angular/core';
import { Observable } from 'Rxjs/Observable';

import { MediaService } from '../services';
import { File } from '../models';

@Component({
    selector: 'all-media',
    templateUrl: 'all-media.component.html',

})
export class AllMediaComponent implements OnInit {

    private allFiles: Observable<Array<File>>;
    constructor(private _mediaService: MediaService) { }

    ngOnInit() {
        this.SyncMedia();
    }

    private Select(files: Array<File>) {
        console.log(files);
    }


    private SyncMedia()
    {
      
        this.allFiles = this._mediaService.GetAll();
    }

    private UploadModelClose(value: boolean)
    {
        if (value)
            this.SyncMedia();
    }
}