import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ServiceList } from './services.list';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
   };




class LoginPacket
{
    username:string;
    password:string;
}

@Injectable()
export class AuthenticateService
{

   static authobject :loginAuthentication;

   constructor(private http: HttpClient){
    AuthenticateService.authobject = new loginAuthentication();
   }

   loginUser(loginForm): Observable<loginAuthentication>
   {
      let loginPacket = new LoginPacket();
      loginPacket.password = loginForm.password;
      loginPacket.username = loginForm.username;
      return this.http.post<loginAuthentication>(ServiceList.AUTH_SERVICE, loginPacket, httpOptions);
   }

   setAuthObject(response)
   {
     AuthenticateService.authobject = response;
   }

   isStillAuthenticated()
   {
     return AuthenticateService.authobject.authenticated;
   }
  
}

class loginAuthentication
{
  authenticated:boolean = false;
  session_token:string = "";
  status:string = "failed";
}