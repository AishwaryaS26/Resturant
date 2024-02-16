import { Item } from "./item";

export interface Order {
    id: string;
    contactName: string;
    orderDate: string;
    itemsOrdered: Item[];
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
}
