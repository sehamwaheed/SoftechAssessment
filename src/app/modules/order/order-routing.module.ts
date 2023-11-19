import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { GetAllDataResolver } from '@softech/resolvers';

const routes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'orderDetails/:id', component: OrderDetailsComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
