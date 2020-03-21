import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { student_exam_class } from '../classes/student_exam_class';

@Injectable({
  providedIn: 'root'
})
export class StudentExamService {
  constructor(private _http:HttpClient) { }

  private url="http://localhost:3000/student_exam/";

  addStudentExam(item:student_exam_class)
  {
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
  }
}
