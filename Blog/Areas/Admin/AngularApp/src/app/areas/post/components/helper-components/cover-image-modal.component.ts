import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AppConfig } from '../../../../app.config';
import { MediaService } from '../../../media/services';
import { File } from '../../../media/models';

@Component({
    selector: 'cover-image',
    templateUrl: 'cover-image-modal.component.html',
    providers: [MediaService]
})
export class CoverImageModalComponent implements OnInit {

    private allFiles: Observable<Array<File>>;
    private selectedFile: File = { id: 0 };
    private ngbModalRef: NgbModalRef;


    @Output() setcover: EventEmitter<File> = new EventEmitter<File>();

    constructor(private _modalService: NgbModal, private _mediaService: MediaService, private _appConfig: AppConfig)
    { }

    ngOnInit() {
        this.allFiles = this._mediaService.GetByType("image");
    }



    private OpenModel(content) {
        this.ngbModalRef= this._modalService.open(content, {
            backdrop: 'static',
            keyboard: true,
            windowClass: 'upload-modal',
            size: 'lg',
        });

        this.ngbModalRef.result.then((result) => {
            console.log("result");
        }, (reason) => {
            console.log("reason");

        })
    }

    private Select(file: File) {
        this.selectedFile = file;

    }

    private GetImagePath(file: File) {
      return this._appConfig.GetBaseUrl() + "/api/file/" + file.id + "/" + file.fileName;
    }

    private SetCoverImage()
    {
        this.setcover.emit(this.selectedFile);
        this.ngbModalRef.close();
    }

}
