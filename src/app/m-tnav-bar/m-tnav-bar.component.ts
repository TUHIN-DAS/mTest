import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-m-tnav-bar',
  templateUrl: './m-tnav-bar.component.html',
  styleUrls: ['./m-tnav-bar.component.css']
})
export class MTNavBarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;     
  
  constructor(private router: Router,private authService:AuthenticateService) { 
  }
  items =  [
    {
        label: 'Evaluations', icon: 'fa fa-fw fa-check',
        items: [
          [
              {
                  label: 'Coding',
                  items: [
                    {label: 'Online',command:(event:any)=>{this.openSelectedMenu(event)}},
                    {label: 'Offline'},{label:'Splits'},{label:'OBP'}]
              }],[
              {
                  label: 'MCQ',
                  items: [{label: 'Technical'},{label: 'Logical'},{label:'Quantitative'},{label:'Puzzles'}]
              }
          ]
      ]

    },
    {
      label: 'Questions', icon: 'fa fa-fw fa-question'
    }
  ];

  ngOnInit() {
   this.isLoggedIn$ = this.authService.loggedIn.asObservable(); 
  }

  
  
  openSelectedMenu(event)
  {
    console.log(event.item.label);
    let component = "mTDashboard";
    switch(event.item.label.toLowerCase())
    {
      case "online" :
         component = "mTCodingOnline";
         break;




    }
    this.router.navigate(['/', component]);
  }
        
}


