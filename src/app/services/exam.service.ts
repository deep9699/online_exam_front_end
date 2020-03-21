import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { exam_class } from '../classes/exam_class';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private _http:HttpClient) { }

  private url="http://localhost:3000/exam/";

  addExam(item:exam_class)
  {
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
  }
  getExamById(id:number)
  {
    return this._http.get(this.url+id);
  }
}
