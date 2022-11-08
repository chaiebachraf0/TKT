import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = environment.backend.baseUrl;


  constructor(private http: HttpClient) {}
  getCounter(parms:any): Observable<any> {
    const headers = new HttpHeaders({
    });
    return this.http.get(`${this.baseUrl}` + parms, {
      headers: headers,
    });
  }
  getGenericById(url: any, id?: number): Observable<any> {
    const headers = new HttpHeaders({
    })
    return this.http.get(`${this.baseUrl}` + url + `/${id}`, {
      headers: headers,
    })
  }
}
