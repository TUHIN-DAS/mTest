import { TestCommon } from './commontest.model'

export class CodingTemplate
{
    statement:string;
    description:string;
    methodName:string;
    methodArgs:MethodArgument[];
    testCases:TestCase[];
    methodReturn:MethodArgument;
    info:TestCommon;
}

export class MethodArgument
{
    name:string;
    datatype:string;
    datatypeid:number;
    id:number;
}  

export class TestCase
{
    title:string;
    inputs:string;
    output:string;
    id:number;
}

