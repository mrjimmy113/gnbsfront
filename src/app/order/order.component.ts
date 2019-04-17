import { OrderService } from './../service/order.service';
import { Product } from './../model/product';
import { ColorService } from './../service/color.service';
import { OrderDetail } from './../model/orderDetail';
import { ModalService } from './../service/modal.service';
import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../model/order';

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
  detail;
  maxQuantity ;
  order;
  requestStatus;
  constructor(private modalSer: ModalService, private colorSer: ColorService, private orderSer: OrderService) { }

  ngOnInit() {
    this.productList = this.inputs;
    this.initNewOrder();

  }
  closeModal() {
    this.modalSer.destroy();
  }

  //#region Product
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
      } else {
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
  //#endregion
  //#region Color
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
  //#endregion
  onSubmit() {
    this.detail.money = Number(this.detail.money) * Number(this.detail.quantity);
    this.order.total = Number(this.order.total) + Number(this.detail.money);
    this.order.details.push(this.detail);
    this.detail = new OrderDetail();
    this.detail.quantity = 0;

  }
  removeDetail(index) {
    this.order.details.splice(index, 1);
  }

  submitOrder() {
    if (this.requestStatus == 200) {
      this.initNewOrder();
    } else {
      let date = new Date();
      let today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      this.order.createdDate = new Date(today);
      this.orderSer.create(this.order).subscribe(result => this.requestStatus = Number(result));
    }
  }
  initNewOrder() {
    this.order = new Order();
    this.order.details = new Array();
    this.detail = new OrderDetail();
    this.detail.quantity = 0;
    this.order.total = 0;
    this.maxQuantity = 0;
    this.requestStatus = 0;
  }
}
