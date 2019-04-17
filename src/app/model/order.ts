import { OrderDetail } from './orderDetail';
export class Order {
    id:Number;
    total:Number;
    createdDate:Date;
    details: OrderDetail[];
}