import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetAllDataResolver } from '@softech/resolvers';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'users',
        loadChildren: () => import('../modules').then((m) => m.UserModule),
      },
      {
        path: 'products',
        loadChildren: () => import('../modules').then((m) => m.ProductModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('../modules').then((m) => m.OrderModule),
        resolve:{allData: GetAllDataResolver}
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
