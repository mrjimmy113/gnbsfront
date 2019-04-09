import { ColorService } from './../service/color.service';
import { ProductService } from './../service/product.service';
import { Product } from './../model/product';
import { ProductCreateComponent } from './../product-create/product-create.component';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';
import { ColorComponent } from '../color/color.component';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  productList : Product[];
  constructor(private modalSer:ModalService, private productSer:ProductService, private colorSer:ColorService) { }

  ngOnInit() {
    this.productSer.getAll().subscribe(result => this.productList = result);
  }

  openCreateModal() {
    this.modalSer.init(ProductCreateComponent,[],[]);
  }
  openSubProduct(id, index) {
    if(!this.productList[index].subProduct) {
      this.colorSer.getAllById(id).subscribe(result => this.productList[index].subProduct = result);
    }else {
      this.productList[index].subProduct = null;
    }
  }
  openColorCreate(id) {
    this.modalSer.init(ColorComponent,id,[]);
  }

}
