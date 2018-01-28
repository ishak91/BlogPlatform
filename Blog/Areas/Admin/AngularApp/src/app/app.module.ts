import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './areas/dashboard/dashboard.component';

//App Modules
import { LayoutModule } from './layout';
import { PostModule } from './areas/post';
import { UserModule } from './areas/user';
import { MediaModule } from './areas/media';
import {SharedModule } from './areas/shared';
import {AuthModule } from './auth';
//App Routing
import { AppRoutingModule } from './app-routing.module';

//App Config

import {AppConfig} from './app.config';

@NgModule({
    imports: [BrowserModule, HttpModule, NgbModule.forRoot(), LayoutModule,
        PostModule, AppRoutingModule, UserModule, MediaModule, SharedModule,
        AuthModule],
    declarations: [AppComponent, DashboardComponent],
    bootstrap: [AppComponent],
    providers: [AppConfig]
})
export class AppModule { }
