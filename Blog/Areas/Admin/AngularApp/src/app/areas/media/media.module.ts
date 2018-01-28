import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'


import { AllMediaComponent, MediaComponent, ViewMediaComponent, MediaGalleryComponent ,MediaUploadComponent} from './components';
import { MediaService } from './services';
import { MediaRoutingModule } from './media-routing.module';
import {SharedModule} from '../shared';

@NgModule({
    imports: [CommonModule, MediaRoutingModule, NgbModalModule, SharedModule],
    declarations: [AllMediaComponent, MediaComponent, ViewMediaComponent, MediaGalleryComponent, MediaUploadComponent],
    providers: [MediaService],
    exports:[]
})
export class MediaModule
{ }