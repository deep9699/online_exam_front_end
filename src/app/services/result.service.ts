import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { result_class } from '../classes/result_class';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  constructor(private _http:HttpClient) { }

  private url="http://localhost:3000/result/";

  addStudentAnswer(item:result_class)
  {
    console.log(item);
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
  }
}
