import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-m-tnotifications',
  templateUrl: './m-tnotifications.component.html',
  styleUrls: ['./m-tnotifications.component.css']
})
export class MTNotificationsComponent implements OnInit {

  constructor() { }
  mtNotify = true;
  static message  = "";
  static flag = false;
  ngOnInit() {
  }

  getMessage()
  {
    return MTNotificationsComponent.message;
  }

  doNotify()
  {
    return MTNotificationsComponent.flag;
  }
  static notify(message:string)
  {
    MTNotificationsComponent.message = MTNotificationsComponent.messageList[message];
    MTNotificationsComponent.flag = true;
  }

  dontNotify()
  {
    MTNotificationsComponent.flag = false;
  }

  // Note : try to add that element of quirkyness while adding the notification messages.
  static messageList = {
    0 : "Enter the value for each argument of the method in the same order separated by (;)."+
        "For array input should be like this [1,2,3] and  for object like this { 'property':'property value'}"+
        ". Now go ahead and try it !",
        
    1 : "Enter the result expected in order to pass this test case. Make sure the result is accurate and precise" + 
         " and remember there is no one else to blame."
  }



  
}
