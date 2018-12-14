import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ServiceList } from './services.list';
import { RegisterUser } from '../models/register.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
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
      loginPacket.password = loginForm.controls.password.value;
      loginPacket.username = loginForm.controls.username.value;
      return this.http.post<any>(ServiceList.AUTH_SERVICE,loginPacket,httpOptions);
   }

   setAuthObject(response)
   {
     AuthenticateService.authobject = response;
   }

   isStillAuthenticated()
   {
     return AuthenticateService.authobject.authenticated;
   }
  
   checkUserInfoExists(registerObject:RegisterUser)
   {
     return this.http.post<any>(ServiceList.EXIST_SERVICE, registerObject, httpOptions);
   }

   addUser(registerObject:RegisterUser)
   {
    return this.http.post<any>(ServiceList.ADD_USER, registerObject, httpOptions);
   }
}

class loginAuthentication
{
  authenticated:boolean = false;
  session_token:string = "";
  status:string = "failed";
}