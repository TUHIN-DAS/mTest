import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate  {

  constructor(private authService: AuthenticateService,private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("this.authService",this.authService.authobject);
    if(this.authService.isStillAuthenticated().accessToken !== undefined && this.authService.isStillAuthenticated().accessToken !== null && this.authService.isStillAuthenticated().accessToken !== "")
    {    
      return true;
	} 
	
	this.authService.loggedIn.next(false);
	this.router.navigate(['/mTLogin']);
    return false;	 
  }
} 
