import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = '';

  constructor(private http :HttpClient) { }

  get(url: string, options: any = {}) {
    return this.http.get(this.baseurl + url, options);
  }
  
  post(url: string, body: any, options: any = {}) {
    return this.http.post(this.baseurl + url, body, options);
  }
  delete(url: string, options: any = {}) {
    return this.http.delete(`${this.baseurl}${url}`, options);
  }
}
