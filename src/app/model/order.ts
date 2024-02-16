import { Item } from "./item";

export interface Order {
    orderNo: number;
    contactName: string;
    orderDate: string;
    itemsOrdered: Item[];
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
}
