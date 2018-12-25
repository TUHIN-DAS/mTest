import { Component, OnInit } from '@angular/core';
import { Notification } from '../services/notification.service';
import { MessageService } from 'primeng/api';
import { AuthenticateService } from '../services/authenticate.service';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router';
import { CommonUtil } from '../utils/common.util';
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
  rangeDates = "";
  busy = true;
  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id', width: 200 },
      { field: 'title', header: 'Title', width: 120 },
      { field: 'name', header: 'Author',  width: 100 },
      { field: 'created_on', header: 'Created On', width: 100 },
      { field: 'actions', header: 'Actions', width: 100}
    ];
      
   this.getTests();

     
  }

  getTests()
  {
    this.testService.getCodeTests(this.authService.authobject.id).subscribe(response=>
      {
        console.log(response);
        this.tests = [];
        for(let i = 0; i < response.length; i++)
        {
          let data = JSON.parse(decodeURIComponent(response[i].data));
          let title = (data.statement.length > 100) ? (data.statement.slice(0,96) + "...") : data.statement;
          response[i]["title"] = title;
          response[i]["relativeTime"] = CommonUtil.getRelativeTime(response[i].created_on);
          response[i]["canChange"] = (this.authService.authobject.id == response[i].author);
          this.tests.push(response[i]);
        }
        this.busy = false;
      }
    );
  }

  deleteTest(testObj)
  {
    this.busy = true;
    this.testService.deleteCodeTest(testObj.id).subscribe(response=>{
    // failed to add due to some error
    if(response.affectedRows == undefined || response.affectedRows == 0)
    {
        this.notification.snapNot("Failed to delete the test("+testObj.title+"). Try again!","",this.msgService,"error",30000);
        return;
    }
    this.notification.snapNot("Test("+testObj.title+") Deleted Succesfully","",this.msgService,"success",30000);
    this.getTests();
    });
  }

  applyDateFilter()
  {
     console.log(this.rangeDates);
     if(this.rangeDates.length < 2 || !this.rangeDates[0]  || !this.rangeDates[1])
     {
      this.notification.snapNot("Invalid Date Filter","",this.msgService,"error",5000);
      return;
     }


  }
}
