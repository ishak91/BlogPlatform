import { Component, ViewEncapsulation, ViewChild, ElementRef, Renderer, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { File } from '../../models';
import { MediaService } from '../../services';

import { FileUploadService } from '../../../shared/services';

import { AppConfig } from '../../../../app.config';

import * as _ from 'lodash';

@Component({
    selector: 'media-upload',
    templateUrl: 'media-upload.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['media-upload.component.css']
})
export class MediaUploadComponent {

    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();


    @ViewChild('fileInput') fileInput: ElementRef;


    private uploadFiles: Array<File> = new Array<File>(0);
    private selectedFiles: Array<File> = new Array<File>(0);
    

    constructor(private modalService: NgbModal, private _renderer: Renderer,
        private _fileUploadService: FileUploadService, private _appConfig: AppConfig,
        private _mediaService: MediaService) { }

    private OpenModel(content) {
        this.modalService.open(content, {
            backdrop: 'static',
            keyboard: true,
            windowClass: 'upload-modal'
        }).result.then((result) => {
            if (this.uploadFiles.length > 0) {
                this.close.emit(true);
            }
            else
            {
                this.close.emit(false);
            }
            this.uploadFiles.length = 0;
            this.selectedFiles.length = 0;
           
        }, (reason) => {
            if (this.uploadFiles.length > 0) {
                this.close.emit(true);
            }
            else {
                this.close.emit(false);
            }
            this.uploadFiles.length = 0;
            this.selectedFiles.length = 0;
           
        });
    }

    private BrowseFile() {
        //let event = new MouseEvent('click', { bubbles: true });
        //event.stopPropagation();
        //this._renderer.invokeElementMethod(
      //  this.fileInput.nativeElement, 'dispatchEvent', [event]);
      console.log(this.fileInput);
      //  var el = this.fileInput.nativeElement as HTMLElement;
      //  el.click();

        this.fileInput.nativeElement.click()

    }

    private Upload(event) {
        console.log(this.fileInput);
       
        let files: FileList = event.srcElement.files
     
        for (let i = 0; i < files.length; i++) {

            let file: File = {
                id: 0,
                path: '/images/common_file.png',
                fileName: files[i].name,
                isProgress: true,
                progressValue: 0.0
            };
          
            this.uploadFiles.push(file)

            this._fileUploadService.UploadXHR(files[i], progress => {
                file.progressValue = parseFloat(parseFloat(progress).toFixed(0));

            }, complete => {
                file.isProgress = false;
                let res = JSON.parse(complete);
                file.id = res.files[0].id;
                file.fileName = res.files[0].fileName;
                file.fileType = res.files[0].fileType;
                switch (res.files[0].fileType) {
                  case 'Image': file.path = this._appConfig.GetBaseUrl + "/api/file/" + file.id + "/" + file.fileName; break;
                    //case 'PDF': file.path = '/images/file_icons/pdf.png'; break;
                    //case 'Word': file.path = '/images/file_icons/word.png'; break;
                    //case 'Excel': file.path = '/images/file_icons/excel.png'; break;
                    //case 'PowerPoint': file.path = '/images/file_icons/powerpoint.png'; break;
                    //case 'Audio': file.path = '/images/file_icons/audio.png'; break;
                    //case 'Video': file.path = '/images/file_icons/video.png'; break;
                    default: file.path = '/images/common_file.png'; break;
                }

             
            }, error => console.log(error));
        }

        this.fileInput.nativeElement.value = "";
    }

    private Select(file: File) {
        if (file.selected) {
            file.selected = false;
            _.remove(this.selectedFiles, i => i.fileName == file.fileName);
        }
        else {
            file.selected = true;
            this.selectedFiles.push(file);
        }
       
    }

    private Delete()
    {
        this.selectedFiles.forEach(file => {
            this._mediaService.Delete(file.id).subscribe(null, err => console.log(err), () => {
                _.remove(this.uploadFiles, f => f.id == file.id);
            });
        });

        this.selectedFiles.length = 0;
    }

    private DeleteAll()
    {
        this.uploadFiles.forEach(file => {
            this._mediaService.Delete(file.id).subscribe(res => console.log(res));
        });
        this.uploadFiles.length = 0;
    }
}
