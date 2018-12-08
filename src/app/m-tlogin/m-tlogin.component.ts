import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-tlogin',
  templateUrl: './m-tlogin.component.html',
  styleUrls: ['./m-tlogin.component.css'],
  providers:[AuthenticateService]
})
export class MTLoginComponent implements OnInit {

  constructor(private authService:AuthenticateService,private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl('',
      Validators.required),
    password: new FormControl('',Validators.required)
  });
  
  
  ngOnInit() {
    if(this.authService.isStillAuthenticated() && sessionStorage.getItem("authObject") != null)
      this.router.navigate(['/', 'mTDashboard']);
  }

  loginUser()
  {
    // validate all the parameters 
    // TODO : handle error case
    if(!this.loginForm.controls.password.valid || !this.loginForm.controls.username.valid) return;
    // authenticate the credentials via service 
    let response = this.authService.loginUser(this.loginForm).subscribe(
      response => { 
         // TODO : need to add more layers of auths later.
         if(response != null && response != undefined && response.authenticated != undefined)
         {
           this.authService.setAuthObject(response);
           sessionStorage.setItem("authObj",JSON.stringify(response));
           this.router.navigate(['/', 'mTDashboard']);
         }
       } 
    );
    
  }

}

