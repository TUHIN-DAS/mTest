export class CodingTemplate
{
    statement:string;
    description:string;
    methodName:string;
    methodArgs:MethodArgument[];
    testCases:TestCase[];
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