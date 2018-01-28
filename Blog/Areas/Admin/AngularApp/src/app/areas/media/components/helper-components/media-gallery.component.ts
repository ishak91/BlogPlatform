import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

import { Observable} from 'Rxjs/Observable'

import { File } from '../../models';
import {AppConfig } from '../../../../app.config';

import * as _ from 'lodash';

@Component({
    selector: 'media-gallery',
    templateUrl: 'media-gallery.component.html',
    styleUrls: ['media-gallery.component.css']
})
export class MediaGalleryComponent implements OnInit {

    @Output() select: EventEmitter<Array<File>> = new EventEmitter();
    @Input() files: Array<File>;

    private selectedFiles: Array<File> = new Array<File>();
  

    constructor(private _appConfig: AppConfig) { }

    ngOnInit() {
      

    }

    private Select(file: File) {
        if (file.selected) {
            file.selected = false;
            _.remove(this.selectedFiles, i => i.id == file.id);
        }
        else {
            file.selected = true;
            this.selectedFiles.push(file);
        }
        this.select.emit(this.selectedFiles);
    }

    private GetThumbnail(file: File)
    {
        var path = "";
        switch (file.fileType) {
            case 'Image': path = this._appConfig.GetBaseApiUrl() + "/FileHandler/" + file.id + "/" + file.fileName; break;
            case 'PDF': path = '/images/file_icons/pdf.png'; break;
            case 'Word': path = '/images/file_icons/word.png'; break;
            case 'Excel': path = '/images/file_icons/excel.png'; break;
            case 'PowerPoint': path = '/images/file_icons/powerpoint.png'; break;
            case 'Audio': path = '/images/file_icons/audio.png'; break;
            case 'Video': path = '/images/file_icons/video.png'; break;
            default: path = '/images/common_file.png'; break;
        }

        return path;
    }

  

}