import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../service/order.service';
import { Order } from '../../model/order';
import { Item } from '../../model/item';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [ViewOrdersComponent,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {

  order:any=[]
  items=new Array<Item>()
  selectedOrderItems:any=[];
  constructor(private orderService: OrderService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.orderService.getOrderDetails().subscribe((data)=>{
    this.order=data
   })
  }

  getOrderById(id:any):void{
    let temp:any
    this.orderService.getOrderDetailsById(id).subscribe((data:any) => {
      this.order = data;
    
  });
  
  this.fetchOrders(this.order)
}
fetchOrders(order:Order): void {
  console.log('Fetch button clicked:', order);
   const itemsOrdered = order.itemsOrdered;
   console.log('Items Ordered:', order);
   const x = order.itemsOrdered;
   console.log(x)
   this.selectedOrderItems=order.itemsOrdered
}

}