import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@softech/shared-component';
 
const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'softech'},
  //* here we use routes with header
  {path:'softech' , loadChildren:()=> import('./main/main.module').then(m=>m.MainModule)},


  {path:'**' , component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
