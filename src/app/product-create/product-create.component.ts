import { SizeService } from './../service/size.service';
import { Product } from './../model/product';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product
  requestStatus = 0;
  constructor(private modalSer: ModalService, private productSer: ProductService) { }

  ngOnInit() {
    this.initNewProduct();
  }

  closeModal() {
    this.modalSer.destroy();
  }
  onSubmit(productForm: NgForm) {
    if (this.requestStatus == 200) {
      this.initNewProduct();
      productForm.resetForm();
    } else {
      if ((this.product.isColored || this.product.isSized)){ this.product.quantity = 0; console.log(this.product.quantity)}
      let date = new Date();
      let today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      this.product.createdDate = new Date(today);
      this.productSer.create(this.product).subscribe(result => this.requestStatus = Number(result));
    }

  }
  initNewProduct() {
    this.product = new Product();
    this.product.isColored = false;
    this.product.isSized = false;
    this.requestStatus = 0;
    
  }
}
