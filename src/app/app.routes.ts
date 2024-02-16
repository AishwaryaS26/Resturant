import { Routes } from '@angular/router';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ViewOrderInfoComponent } from './components/view-order-info/view-order-info.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

  
    {path:"orders",component:ViewOrdersComponent},
    {path:"payments",component:PaymentsComponent},
    {path:"home",component:HomeComponent},
    { path: 'view-order-info/:orderNo', component: ViewOrderInfoComponent },

];
