import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import {CmsConfig, ConfigModule} from "@spartacus/core";
import { CartComponent } from './cart/cart.component';
import { MyBannerComponent } from './my-banner/my-banner.component';
import {MediaModule, ProductListModule, SpinnerModule} from "@spartacus/storefront";
import {HomeOutletComponent} from "./home-outlet/home-outlet.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CustomProductIntroComponent,
    CartComponent,
    MyBannerComponent,
    HomeOutletComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleBannerComponent: {
          component: MyBannerComponent
        },
        BannerComponent: {
          component: MyBannerComponent
        },
        CartComponent: {
          component: CartComponent
        }
      }
    } as CmsConfig),
    MediaModule,
    ProductListModule,
    RouterModule,
    SpinnerModule
  ]
})
export class MyComponentsModule { }
