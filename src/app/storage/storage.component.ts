import { OrderComponent } from './../order/order.component';
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
  productList: Product[];
  constructor(private modalSer: ModalService, private productSer: ProductService, private colorSer: ColorService) { }

  ngOnInit() {
    this.productSer.getAll().subscribe(result => this.productList = result);
  }

  openCreateModal() {
    this.modalSer.init(ProductCreateComponent, [], []);
  }
  openSubProduct(p, index) {
    if (p.isColored || p.isSized) {
      
      if (!this.productList[index].subProduct) {
        this.colorSer.getAllById(p.id).subscribe(result => {this.productList[index].subProduct = result});
        this.productList[index].isOpen = true;
      } else {
        if(!p.isOpen) this.productList[index].isOpen = true;
        else this.productList[index].isOpen = false;
      }
    }
  }
  openColorCreate(id) {
    this.modalSer.init(ColorComponent, id, []);
  }
  removeProduct(id) {
    this.productSer.remove(id).subscribe(result => console.log(result));
  }
  public setSubProduct(index,sub) {
    this.productList[index].subProduct = sub;
  }
  public setProductList(productList) {
    this.productList = productList;
  }
  openSellOrder() {
    this.modalSer.init(OrderComponent, this.productList,[]);
  }

}
