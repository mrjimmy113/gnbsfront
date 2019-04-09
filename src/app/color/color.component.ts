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
  @Input()inputs: Number
  color = new Color();
  constructor(private modalSer:ModalService, private colorSer:ColorService) { }

  ngOnInit() {
    this.color.productId = this.inputs;
    console.log(this.color);
  }
  closeModal() {
    this.modalSer.destroy();
  }
  onSubmit() {
    this.colorSer.create(this.color).subscribe(result => console.log(result));
  }
}
