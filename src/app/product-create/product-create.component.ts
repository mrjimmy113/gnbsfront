import { SizeService } from './../service/size.service';
import { Product } from './../model/product';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product = new Product();
  constructor(private modalSer:ModalService, private productSer:ProductService) { }

  ngOnInit() {
    this.product.isColored = false;
    this.product.isSized = false;
  }

  closeModal() {
    this.modalSer.destroy();
  }
  onSubmit() {
    if(!(this.product.isColored || this.product.isSized)) this.product.quantity = 0;
    let date = new Date();
    let today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.product.createdDate = new Date(today);
    this.productSer.create(this.product).subscribe(result => console.log(result));
  }
}
