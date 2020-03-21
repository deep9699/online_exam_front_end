import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private _http:HttpClient) { }

  private url="http://localhost:3000/batch";

  getAllBatches()
  {
    return this._http.get(this.url);
  }
}
