
/*
Notification service 
Used to show notifications of any type.
TODO : add more notification types.

Need to import and provide messageservice ref from the calling component.

*/

import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class Notification
{

    private messageService = new MessageService();
    
    notifyShort(msgId,type,ref)
    {
        ref.add({severity:type, summary:Notification.messageTitle[msgId], detail:Notification.messageList[msgId],life:5000});
    }

    notifyLong(msgId,type,ref)
    {
        ref.add({severity:type, summary:Notification.messageTitle[msgId], detail:Notification.messageList[msgId],life:30000});
    }

    snapNot(msgTitle,msgDesc,ref,type,time)
    {
        ref.add({severity:type, summary:msgTitle, detail:msgDesc,life:time});
    }

    // Note : try to add that element of quirkyness while adding the notification messages.
    static messageList = {
      0 : "Enter the value for each argument of the method in the same order separated by (;)."+
          "For array input should be like this [1,2,3] and  for object like this { 'property':'property value'}"+
          ". Now go ahead and try it !",
          
      1 : "Enter the result expected in order to pass this test case. Make sure the result is accurate and precise" + 
           " and remember there is no one else to blame.",

      2 : "Argument name must comply with the guidelines of identifier name.",

      3 : "",
      4 : "",
      5 : "",
      6 : "",
      7 : "",
      8 : "",
      9 : "",
      10 : "",
      11 : "",
      12 : "",
      13 : "Method name must comply with the guidelines of identifier name.",
      14 : "There is no argument specififed in method to test the Test Case(s)"
    }

    static messageTitle = {
      0 : "Method Argument Inputs",
      1 : "Method Return",
      2 : "Invalid Argument Name",
      3 : "Argument Datatype Not Selected",
      4 : "Argument Name is Blank",
      5 : "Test Case Title is Blank",
      6 : "Test Case Input(s) are Blank",
      7 : "Test Case Output is Blank",
      8 : "Argument Name Already Exists",
      9 : "Same Test Case Title Already Exists",
      10 : "Test Case Already Exists",
      11 : "Problem Statement is Blank",
      12 : "Method Name is Blank",
      13 : "Invalid Method Name",
      14 : "Test Case(s) are not Required"
    }
}