import { Product } from './../model/product';
import { FullReport } from './../model/fullReport';
import { Component, OnInit } from '@angular/core';
import { ReportService } from '../service/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report = new FullReport;
  
  constructor(private reportSer: ReportService) { }

  ngOnInit() {
    this.report.bestSeller = new Product();
    this.reportSer.full().subscribe(result => {this.report = result; console.log(result)});
  }

}
