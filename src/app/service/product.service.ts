import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private createAPI = 'product/create';
  private getAllAPI = 'product/getAll';
  private removeAPI = 'product/remove/';
  constructor(private http:HttpClient) { }

  create(product): Observable<Number> {
    return this.http.post<Number>(environment.apiEndPoint + this.createAPI, product);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiEndPoint + this.getAllAPI);
  }
  remove(id) :Observable<Number> {
    return this.http.delete<Number>(environment.apiEndPoint + this.removeAPI + id);
  }
}
