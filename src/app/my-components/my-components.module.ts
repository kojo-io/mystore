import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCartComponent } from './new-cart/new-cart.component';
import {CmsConfig, ConfigModule} from "@spartacus/core";



@NgModule({
  declarations: [
    NewCartComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: NewCartComponent
        }
      }
    } as CmsConfig)
  ]
})
export class MyComponentsModule { }
