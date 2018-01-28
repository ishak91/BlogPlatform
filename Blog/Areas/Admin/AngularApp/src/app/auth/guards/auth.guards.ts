import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'Rxjs/Observable';

import {AuthService } from '../services';

@Injectable()
export class IsAuthenticatedGurd implements CanActivate
{
    constructor(private _authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        return this._authService.IsAuthenticated().map(res => {
            //res.isAuthenticated = true;
            if (res.isAuthenticated)
                return true;
            else {
                console.log("Session got expaird. User is not authenticated. Please login.")
                window.location.reload(true);
                return false;
            }
        });
        

    }

}


