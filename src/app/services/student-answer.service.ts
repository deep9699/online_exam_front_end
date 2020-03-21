import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { student_answer_class } from '../classes/student_answer_class';

@Injectable({
  providedIn: 'root'
})
export class StudentAnswerService {

  constructor(private _http:HttpClient) { }

  private url="http://localhost:3000/student_answer/";

  addStudentAnswer(item:student_answer_class)
  {
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
  }

  getStudentAnswer(Student_id:number,Exam_id:number)
  {
    return this._http.get(this.url+Student_id+'/'+Exam_id);
  }

}
