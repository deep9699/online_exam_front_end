import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http:HttpClient) { }
  private url="http://localhost:3000/subject";

  getAllSubject()
  {
    return this._http.get(this.url);
  }
}
