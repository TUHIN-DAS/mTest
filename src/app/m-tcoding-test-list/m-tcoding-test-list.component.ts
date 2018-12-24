import { Component, OnInit } from '@angular/core';
import { Notification } from '../services/notification.service';
import { MessageService } from 'primeng/api';
import { AuthenticateService } from '../services/authenticate.service';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-tcoding-test-list',
  templateUrl: './m-tcoding-test-list.component.html',
  styleUrls: ['./m-tcoding-test-list.component.css']
})
export class MTCodingTestListComponent implements OnInit {

  constructor(private msgService:MessageService,private notification:Notification,private authService:AuthenticateService,private testService:TestService,private router: Router) { }
  selectedRows = [];
  tests = [];
  cols = [];

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'name', header: 'Author' },
      { field: 'created_on', header: 'Created On' }
    ];
      
    this.testService.getCodeTests(this.authService.authobject.id).subscribe(response=>
      {
        console.log(response);

        for(let i = 0; i < response.length; i++)
        {
          let data = JSON.parse(decodeURIComponent(response[i].data));
          let title = (data.statement.length > 100) ? (data.statement.slice(0,96) + "...") : data.statement;
          response[i]["title"] = title;
          this.tests.push(response[i]);
        }
      }

    );

     
  }

}
