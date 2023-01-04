import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  constructor(private _httpclient:HttpClient) { }

  servicePost(apiName:any,formValue:any):Observable<any>
  {
    return this._httpclient.post(`${environment.API_URL}${apiName}`,formValue);
  }

  serviceGet(apiName:any):Observable<any>
  {
    return this._httpclient.get(`${environment.API_URL}${apiName}`);
  }




}


