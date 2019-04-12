import { Color } from './color';
export class Product {
    id:Number;
    name:string;
    quantity:Number;
    price:Number;
    isColored: boolean;
    isSized: boolean;
    createdDate: Date;
    modifyDate: Date;
    subProduct: Color[];
    isOpen:boolean;
}