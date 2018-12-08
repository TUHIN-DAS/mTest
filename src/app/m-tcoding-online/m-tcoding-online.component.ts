import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { MTNotificationsComponent } from './../m-tnotifications/m-tnotifications.component';
import { CodingTemplate, MethodArgument, TestCase } from '../models/coding.model';
@Component({
  selector: 'app-m-tcoding-online',
  templateUrl: './m-tcoding-online.component.html',
  styleUrls: ['./m-tcoding-online.component.css']
})
export class MTCodingOnlineComponent implements OnInit {

  constructor() { }
  codingForm = new FormGroup({
    statement: new FormControl('',
      Validators.required),
    description: new FormControl('<h1>Describe the <b>PROBLEM</b>,</h1><h3> in the best way possible !</h3>',Validators.required),
    function: new FormControl('',Validators.required)
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
    MTNotificationsComponent.notify(msgId);
  }

  addArgument()
  {
    let arg = new MethodArgument();
    arg.datatype = this.argType.label;
    arg.datatypeid = this.argType.value;
    arg.name = this.argName;
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

}

