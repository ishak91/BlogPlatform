import { Component,OnInit } from '@angular/core';

import { AuthService } from '../../auth/services';
import { UserDetails } from '../../auth/models'
import { AppConfig } from '../../app.config';

@Component({
    selector: 'header-layout',
    templateUrl: 'header-layout.component.html',
    
    
})
export class HeaderLayoutComponent implements OnInit {

    private fullName: string;
    private userInfo: UserDetails;
    constructor(private _authService: AuthService, private _appConfig: AppConfig)
    { }

    ngOnInit()
    {
        //this._authService.GetUserInfo().subscribe(res => {
        //    this.userInfo = res;
        //    this.fullName = res.firstName + ' ' + res.lastName;
        //}, err => console.error(err));
    }

    private GetUserImage()
    {
        if (this.userInfo != undefined && this.userInfo.imageAvailable != undefined && this.userInfo.imageAvailable)
            return this._appConfig.GetBaseApiUrl + "/User/ProfileImage?email=" + this.userInfo.email;
        else
            return 'assets/images/default_profile.png';
    }
}
