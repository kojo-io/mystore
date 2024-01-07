import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import {ConfigModule} from "@spartacus/core";



@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        WishListComponent: {
          component: WishlistComponent
        }
      }
    })
  ]
})
export class WishlistModule { }
