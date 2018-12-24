import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ServiceList } from './services.list';
import { CodingTemplate} from '../models/coding.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class TestService
{
    constructor(private http: HttpClient){
        
    }

    addCodeTest(codeTest)
    {
        return this.http.post<any>(ServiceList.ADD_CODE_TEST,codeTest,httpOptions);
    }

    getCodeTests(id)
    {
        return this.http.post<any>(ServiceList.GET_CODE_TEST,{"author":id},httpOptions);
    }

}