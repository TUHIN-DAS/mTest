import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { CodingTemplate, MethodArgument, TestCase } from '../models/coding.model';
import { RegexList } from '../utils/regex.list';
import { Notification } from '../services/notification.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-m-tcoding-online',
  templateUrl: './m-tcoding-online.component.html',
  styleUrls: ['./m-tcoding-online.component.css']
})

export class MTCodingOnlineComponent implements OnInit {

  constructor(private msgService:MessageService,private notification:Notification) { }
  codingForm = new FormGroup({
    statement: new FormControl('',
      Validators.required),
    description: new FormControl('<h1>Describe the <b>PROBLEM</b>,</h1><h3> in the best way possible !</h3>',Validators.required),
    function: new FormControl('',Validators.required),
    functionReturn: new FormControl('',Validators.required)
  });

  argName = "";
  argType = {label:'Select Datatype', value:null};
  tcTitle = "";
  tcIP = "";
  tcOP = "";
  args = [];
  testCases = [];
  previewTest = false;

  dataTypes = [
    {label:'Select Datatype', value:null},
    {label:'Boolean', value:{label:'Boolean', value:0}},
    {label:'String', value:{label:'String', value:1}},
    {label:'Number', value:{label:'Number', value:2}},
    {label:'Object', value:{label:'Object', value:3}},
    {label:'Array', value:{label:'Array', value:4}}
  ]
  ngOnInit() {
   
  }

  help(msgId)
  {
    this.notification.notifyLong(msgId,"warn",this.msgService);
  }

  addArgument()
  {
    let arg = new MethodArgument();
    if(this.argType != null)
    {
      arg.datatype = this.argType.label;
      arg.datatypeid = this.argType.value;
    }
    arg.name = this.argName;
    if(!this.validateArgument(arg)) return;
    arg.id = this.argCount++;
    this.args.push(arg);
  }

  tcCount = 0;
  argCount = 0;
  addTestCase()
  {
    let testCase = new TestCase();
    testCase.inputs = this.tcIP;
    testCase.output = this.tcOP;
    testCase.title = this.tcTitle;
    if(!this.validateTestCase(testCase)) return;
    testCase.id = this.tcCount++;
    this.testCases.push(testCase);
  }

  removeArgument(id)
  {
    for(let i = 0; i < this.args.length; i++)
    {
      if(this.args[i].id == id)
      {
        this.args.splice(i,1);
        return;
      }
    }
  }

  removeTestCase(id)
  {
    for(let i = 0; i < this.testCases.length; i++)
    {
      if(this.testCases[i].id == id)
      {
        this.testCases.splice(i,1);
        return;
      }
    }
  }

  dataObj = new CodingTemplate();
  save()
  {

    
    // save the entire data in a coding template
    
    this.dataObj.statement = this.codingForm.controls.statement.value;
    this.dataObj.description = this.codingForm.controls.description.value;
    this.dataObj.methodArgs = this.args;
    this.dataObj.testCases = this.testCases;
    this.dataObj.methodName = this.codingForm.controls.function.value;
    let returnObj = new MethodArgument();
    if(this.codingForm.controls.functionReturn.value != null)
    {
      returnObj.datatype = this.codingForm.controls.functionReturn.value.label;
      returnObj.datatypeid = this.codingForm.controls.functionReturn.value.id;
    }
    this.dataObj.methodReturn = returnObj;
    if(!this.validateTest()) return;
    this.previewTest = true; 
    console.log(this.dataObj);
  }

  validateArgument(arg)
  {
    arg.datatype = this.argType.label;
    arg.datatypeid = this.argType.value;
   
    let what = true;
    // arg name cant be left blank
    if(arg.name == "")
    {
      this.notification.notifyShort(4,"error",this.msgService);
      what = false;
    }
    
    // arg name should be comply with identifier rules.
    else if(!RegexList.ARG_PATTERN.test(arg.name))
    {
      this.notification.notifyLong(2,"error",this.msgService);
      what = false;
    }

    else// check if name already exists
    {
      for(let i = 0; i < this.args.length;i++)
      {
      if(this.args[i].name == arg.name)
      {
        this.notification.notifyShort(8,"error",this.msgService);
        what = false;
      }
      }
    }

    // arg datatype must be selected.
    if(arg.datatypeid == null)
    {
      this.notification.notifyShort(3,"error",this.msgService);
      what =  false;
    }
    return what;
  }

  validateTestCase(testCase)
  {
    testCase.inputs = this.tcIP;
    testCase.output = this.tcOP;
    testCase.title = this.tcTitle;
    
    // validate test case title
    if(testCase.title == "")
    {
      this.notification.notifyShort(5,"error",this.msgService);
      return false;
    }

    if(testCase.inputs == "")
    {
      this.notification.notifyShort(6,"error",this.msgService);
      return false;
    }

    if(testCase.output == "")
    {
      this.notification.notifyShort(7,"error",this.msgService);
      return false;
    }

    for(let i = 0; i < this.testCases.length;i++)
    {
      console.log(testCase);
      if(this.testCases[i].title == testCase.title)
      {
        this.notification.notifyShort(9,"error",this.msgService);
        return false;
      }

      if(this.testCases[i].inputs == testCase.inputs)
      {
        this.notification.notifyShort(10,"error",this.msgService);
        return false;
      }
    
      
    }

    return true;    
  }

  validateTest()
  {
     // validate all the props of coding test
     // description is optional.
     // also return type and args are optional. 
     let what = true;
     if(this.dataObj.statement == "")
     {
       this.notification.notifyLong(11,"error",this.msgService);
       what = false;
     }

     if(this.dataObj.methodName == "")
     {
       this.notification.notifyLong(12,"error",this.msgService);
       what = false;
     }

     else if(!RegexList.ARG_PATTERN.test(this.dataObj.methodName))
     {
       this.notification.notifyLong(13,"error",this.msgService);
       what = false;
     }
    
     
     // discard test cases if both method args and method return are not specified.
     if(this.dataObj.methodArgs.length == 0 && this.testCases.length > 0 )
     {
       this.notification.notifyLong(14,"error",this.msgService);
       what = false;
     }

     
     for(let i = 0; i < this.testCases.length; i++)
     {
       if(!this.validateTestCaseOnArgs(i))
         what = false;
     }

     return what;

  }

  validateTestCaseOnArgs(id)
  {
     // for each test case check it is valid with method args and method return type.
     // check if args and inputs are same.
     let inputs = this.testCases[id].inputs.split(";");
     if(inputs.length != this.dataObj.methodArgs.length)
     {
       this.notification.snapNot("Test Case "+id+" is Invalid","Method Argument(s) and Test Case Input(s) does not match.",this.msgService,"error",30000);
       return false;
     }
     return true;
  }
}

