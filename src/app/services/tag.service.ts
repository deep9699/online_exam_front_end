import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private _http:HttpClient) { }
  private url="http://localhost:3000/tag/";

  getTagbySubjectId(id)
  {
    return this._http.get(this.url+id);
  }

}
