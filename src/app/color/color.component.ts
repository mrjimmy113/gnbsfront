import { NgForm } from '@angular/forms';
import { ColorService } from './../service/color.service';
import { ModalService } from './../service/modal.service';
import { Color } from './../model/color';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() inputs: Number
  color;
  requestStatus = 0;
  constructor(private modalSer: ModalService, private colorSer: ColorService) { }

  ngOnInit() {
    this.color = new Color();
    this.color.productId = this.inputs;

  }
  closeModal() {
    this.modalSer.destroy();
  }
  onSubmit(productForm : NgForm) {
    if (this.requestStatus == 200) {
      this.initNewColor();
      productForm.resetForm();
    } else {
      this.colorSer.create(this.color).subscribe(result => this.requestStatus = Number(result));
    }
  }
  initNewColor() {
    this.color = new Color();
    this.requestStatus = 0;
  }
}
