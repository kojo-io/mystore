import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHomeComponent } from './my-home.component';
import {ConfigModule} from "@spartacus/core";



@NgModule({
  declarations: [
    MyHomeComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        
      }
    })
  ]
})
export class MyHomeModule { }
