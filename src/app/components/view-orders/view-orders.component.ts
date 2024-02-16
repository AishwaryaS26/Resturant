import { Component } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ViewOrderInfoComponent } from '../view-order-info/view-order-info.component';
import { CommonModule } from '@angular/common';
import { Order } from '../../model/order';
import { Item } from '../../model/item';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {

  orders=new Array<Order>()
 item=new Array<Item>()

  constructor(private orderService: OrderService,private router:Router) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data:any)=>{
      console.log(data)
      this.orders=data
    })
    console.log(this.orders)
  

  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(order => {
      //console.log(order)
     // console.log("hi"+this.orders[0].itemsOrdered)
    //  console.log("hi")
      console.log(this.orders)
    });

    
  }
// hi(){
//   //console.log("hi",this.orders)
//  for(let i=0;i<this.orders.length;i++){
//   this.item=(this.orders[i].itemsOrdered)
//   console.log(this.orders[i].itemsOrdered)

//  }
// }
viewOrder(): void {
  this.router.navigate(['view-order-info/:orderNo']);
  
  }

  getOrderById():void{
    this.router.navigate(['view-order-info/:orderNo']);
    this.orderService.getOrderDetailsById("ORD002").subscribe((data:any) => {
      this.orders = data;
      console.log(this.orders)
  });
 
}}
