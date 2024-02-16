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

  order=new Array<Order>()
  items=new Array()

  constructor(private orderService: OrderService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // const orderNo = this.route.snapshot.paramMap.get('orderNo');
    // this.orderService.getOrderDetails(orderNo).subscribe((order: Order) => {
    //   this.order = this.order;

    // });
   
    // console.log(this.order)
  }

//   getOrder():void{

//     this.orderService.getOrderDetails().subscribe((data:any) => {
//       this.order = data;
//   });
// }
  getOrderById():void{

    this.orderService.getOrderDetailsById("ORD002").subscribe((data:any) => {
      this.order = data;
      // this.items=data;
      console.log(this.order)
      // console.log(this.items)
  });
}
}