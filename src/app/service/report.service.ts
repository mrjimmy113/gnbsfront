import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FullReport } from '../model/fullReport';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private fullreportAPI = 'report/full';
  constructor(private http:HttpClient) { }

  full():Observable<FullReport> {
    return this.http.get<FullReport>(environment.apiEndPoint + this.fullreportAPI);
  }
}
