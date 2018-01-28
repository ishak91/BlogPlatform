import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllMediaComponent, MediaComponent, ViewMediaComponent } from './components';

const mediaRoutes: Routes = [
    {
        path: 'media',
        component: MediaComponent,
        
        children: [
            {
                path: '',
                redirectTo: 'all',
                pathMatch:'full'
            },
            {
                path: 'all',
                component: AllMediaComponent
            },
            {
                path: ':id',
                component: ViewMediaComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(mediaRoutes)],
    exports: [RouterModule]
})
export class MediaRoutingModule
{ }