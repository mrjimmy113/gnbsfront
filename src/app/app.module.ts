import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { StorageComponent } from './storage/storage.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorComponent } from './color/color.component';
import { SizeComponent } from './size/size.component';

@NgModule({
  declarations: [
    AppComponent,
    StorageComponent,
    ProductCreateComponent,
    ColorComponent,
    SizeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
