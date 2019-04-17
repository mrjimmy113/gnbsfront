import { ReportComponent } from './report/report.component';
import { OrderComponent } from './order/order.component';
import { ColorComponent } from './color/color.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { StorageComponent } from './storage/storage.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'kho', component: StorageComponent },
  { path: '', component: ReportComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}