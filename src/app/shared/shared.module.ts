import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
 

const COMPONENTS = [
  NotFoundComponent
]
 



@NgModule({
  declarations: [ 
    ...COMPONENTS, 
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...COMPONENTS,
  ]
})
export class SharedModule { }
