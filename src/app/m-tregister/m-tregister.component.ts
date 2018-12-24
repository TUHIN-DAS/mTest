import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RegisterUser } from './../models/register.model';
import { Notification } from '../services/notification.service';
import { MessageService } from 'primeng/api';
import { RegexList } from '../utils/regex.list';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-m-tregister',
  templateUrl: './m-tregister.component.html',
  styleUrls: ['./m-tregister.component.css'],
  providers:[AuthenticateService]
})
export class MTRegisterComponent implements OnInit {
  busy = false;
  registerForm = new FormGroup({
    username: new FormControl('',
      Validators.required),
    password: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required)
  });

  constructor(private router: Router,private authService:AuthenticateService,private msgService:MessageService,private notification:Notification) { }

  ngOnInit() {
  }

  registerUser()
  {
    let valid = true;
    
    let registerObj = new RegisterUser();
    registerObj.username = this.registerForm.controls.username.value;
    registerObj.password = this.registerForm.controls.password.value;
    registerObj.email = this.registerForm.controls.email.value;
    // before submitting validate email , phone format.
    if(registerObj.username  == "")
    {
      valid = false;
      this.notification.snapNot("Username is Blank","",this.msgService,"error",10000);
    }
    if(registerObj.password == "")
    {
      valid = false;
      this.notification.snapNot("Password is Blank","",this.msgService,"error",10000);
    }

    if(registerObj.email == "")
    {
      valid = false;
      this.notification.snapNot("Email is Blank","",this.msgService,"error",10000);
    }
    else if(!RegexList.EMAIL_PATTERN.test(registerObj.email))
    {
      valid = false;
      this.notification.snapNot("Invalid Email","",this.msgService,"error",10000);
    }

    console.log(this.registerForm.controls.phone.value);

    if(this.registerForm.controls.phone.value == "")
    {
      valid = false;
      this.notification.snapNot("Phone is Blank","",this.msgService,"error",10000);
    }
    else if(isNaN(this.registerForm.controls.phone.value) || this.registerForm.controls.phone.value.length < 10)
    {
      valid = false;
      this.notification.snapNot("Phone is Invalid","",this.msgService,"error",10000);
    }
    else
    {
      registerObj.phone = parseInt(this.registerForm.controls.phone.value);
    }

    if(!valid) return;
    this.busy = true;
    // validate email, username or phone exist or not.
    this.authService.checkUserInfoExists(registerObj).subscribe(
      response => {
        console.log(response);
        
        if(response[0].count > 0)
        { 
          this.busy = false;
          this.notification.snapNot("User Exists","User already registered with same email, username or phone.",this.msgService,"error",20000);
        }
        else
        {
          // call register service
          this.authService.addUser(registerObj).subscribe(
          response =>
          {
            this.busy = false;
             // failed to add due to some error
            if(response.affectedRows == undefined || response.affectedRows == 0)
            {
              this.notification.snapNot("Failed to register. Try again!","",this.msgService,"error",30000);
              return;
            }
            this.notification.snapNot("Successful","User "+registerObj.username+" ("+registerObj.email+") has been registered",this.msgService,"success",20000);
            this.router.navigate(['/', 'mTLogin']);
          }
          );
        }
      }
    );
   
  }
}
