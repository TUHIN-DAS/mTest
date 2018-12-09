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
    arg.datatype = this.argType.label;
    arg.datatypeid = this.argType.value;
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

  save()
  {
    // save the entire data in a coding template
    let dataObj = new CodingTemplate();
    dataObj.statement = this.codingForm.controls.statement.value;
    dataObj.description = this.codingForm.controls.description.value;
    dataObj.methodArgs = this.args;
    dataObj.testCases = this.testCases;
    dataObj.methodName = this.codingForm.controls.function.value;
    
    console.log(dataObj);
  }

  validateArgument(arg)
  {
    arg.datatype = this.argType.label;
    arg.datatypeid = this.argType.value;
   
    // arg name cant be left blank
    if(arg.name == "")
    {
      this.notification.notifyShort(4,"error",this.msgService);
      return false;
    }
    
    // arg name should be comply with identifier rules.
    if(!RegexList.ARG_PATTERN.test(arg.name))
    {
      this.notification.notifyLong(2,"error",this.msgService);
      return false;
    }

    // arg datatype must be selected.
    if(arg.datatypeid == null)
    {
      this.notification.notifyShort(3,"error",this.msgService);
      return false;
    }

    // check if name already exists
    for(let i = 0; i < this.args.length;i++)
    {
      if(this.args[i].name == arg.name)
      {
        this.notification.notifyShort(8,"error",this.msgService);
        return false;
      }
    }

    return true;
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
}

