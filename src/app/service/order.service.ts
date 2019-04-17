import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private createAPI = "order/create";

  constructor(private http:HttpClient) { }

  create(order) :Observable<string> {
    return this.http.post<string>(environment.apiEndPoint + this.createAPI, order);
  }
}
