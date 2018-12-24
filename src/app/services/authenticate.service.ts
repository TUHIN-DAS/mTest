import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ServiceList } from './services.list';
import { RegisterUser } from '../models/register.model';
import { BehaviorSubject } from 'rxjs';

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

   authobject :loginAuthentication;
   loggedIn = new BehaviorSubject<boolean>(false); // {1}


   constructor(private http: HttpClient){
    this.authobject = new loginAuthentication();
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
     this.authobject = response;
   }

   isStillAuthenticated()
   {
     return this.authobject;
   }
  
   checkUserInfoExists(registerObject:RegisterUser)
   {
     return this.http.post<any>(ServiceList.EXIST_SERVICE, registerObject, httpOptions);
   }

   addUser(registerObject:RegisterUser)
   {
    return this.http.post<any>(ServiceList.ADD_USER, registerObject, httpOptions);
   }
   
   get isLoggedIn() {
    return this.loggedIn.asObservable(); 
   }

}

class loginAuthentication
{
  authenticated:boolean = false;
  session_token:string = "";
  status:string = "failed";
  accessToken: string = "";
}
