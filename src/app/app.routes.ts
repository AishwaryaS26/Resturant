import { Routes } from '@angular/router';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ViewOrderInfoComponent } from './components/view-order-info/view-order-info.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [

    {path:"home",component:HomeComponent},
    {path:"orders",component:ViewOrdersComponent,canActivate:[authGuard]},
    {path:"payments",component:PaymentsComponent},
    { path: 'view-order-info/:orderNo', component: ViewOrderInfoComponent },

];
