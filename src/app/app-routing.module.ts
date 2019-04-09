import { ColorComponent } from './color/color.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { StorageComponent } from './storage/storage.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: StorageComponent },
  { path: 'product/create', component:ProductCreateComponent},
  { path: 'product/color', component:ColorComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}