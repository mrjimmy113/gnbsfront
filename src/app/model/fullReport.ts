import { Product } from './product';
import { Order } from './order';

export class FullReport {
    totalRevenue: Number;
    totalOrder: Number;
    bestSeller: Product;
    orders: Array<Order>;
}