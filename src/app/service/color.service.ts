import { Color } from './../model/color';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private getAllByIdAPI = "color/getAllById/";
  private createAPI = "color/create";
  constructor(private http:HttpClient) { }

  create(color): Observable<string> {
    return this.http.post<string>(environment.apiEndPoint + this.createAPI, color);
  }
  getAllById(id): Observable<Color[]> {
    return this.http.get<Color[]>(environment.apiEndPoint + this.getAllByIdAPI + id);

  }
}
