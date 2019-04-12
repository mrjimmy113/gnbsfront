import { Product } from './../model/product';
import { ColorService } from './../service/color.service';
import { OrderDetail } from './../model/orderDetail';
import { ModalService } from './../service/modal.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() inputs;
  productList;
  searchProductList;
  currectSubList;
  searchCurrentSubList;
  total = 100000;
  detail = new OrderDetail();
  maxQuantity = 0;
  detailList : OrderDetail[] = new Array();
  constructor(private modalSer: ModalService, private colorSer: ColorService) { }

  ngOnInit() {
    this.productList = this.inputs;
    this.detail.quantity = 0;

  }
  closeModal() {
    this.modalSer.destroy();
  }
  onSubmit() {
    this.detail.money = Number(this.detail.money) * Number(this.detail.quantity);
    this.detailList.push(this.detail);
    this.detail = new OrderDetail();
    this.detail.quantity = 0;

  }
  findProduct(event) {
    this.searchProductList = this.productList.filter(
      product => product.name.includes(event.target.value
      ));
  }
  chooseProduct(product) {
    this.currectSubList = null;
    this.detail.productId = product.id;
    this.detail.productName = product.name;
    this.searchProductList = null;
    let index = this.productList.findIndex((p) => { return p.id == product.id })
    let p = this.productList[index]
    if (!p.subProduct) {
      if (p.isColored) {
        this.colorSer.getAllById(product.id).subscribe(result => {
          this.productList[index].subProduct = result
          this.currectSubList = result;
          this.detail.money = p.price;
        });
      }else {
        this.maxQuantity = p.quantity;
        this.detail.money = p.price;
      }
    } else {
      this.currectSubList = this.productList[index].subProduct;
      this.detail.money = p.price;
    }
  }
  resetProductName() {
    if (this.searchProductList) {
      this.detail.productName = "";
    }
  }

  findColor(event) {
    this.searchCurrentSubList = this.currectSubList.filter(
      sub => sub.id.includes(event.target.value
      ));
  }
  chooseColor(color) {
    this.detail.colorId = color.id;
    this.searchCurrentSubList = null;
    this.maxQuantity = color.quantity;
  }
  resetColorId() {
    if (this.searchCurrentSubList) {
      this.detail.colorId = "";
    }
  }
  removeDetail(index) {
    this.detailList.splice(index,1);
  }
}
