import {NgModule} from '@angular/core';
import {translationChunksConfig, translations} from "@spartacus/assets";
import {FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig} from "@spartacus/core";
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
  OutletPosition, ProductListModule,
  provideOutlet
} from "@spartacus/storefront";
import {CheckoutConfigurationModule} from "./checkout-configuration/checkout-configuration.module";
import {MyComponentsModule} from "../my-components/my-components.module";
import {WishlistModule} from "../my-components/wishlist/wishlist.module";
import {MyHomeModule} from "../my-components/my-home/my-home.module";
import {HomeOutletComponent} from "../my-components/home-outlet/home-outlet.component";
import {SmartEditConfig} from "@spartacus/smartedit/root";

@NgModule({
  declarations: [],
  imports: [
    CheckoutConfigurationModule,
    ProductListModule,
    MyComponentsModule,
    WishlistModule,
    MyHomeModule
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      // urlParameters: ['language','baseSite', 'currency'],
      baseSite: ['electronics-spa'],
      currency: ['USD'],
      language: ['en','de'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      // resources: {
      //   ...GERMAN_TRANSLATIONS
      // },
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  }),
  provideOutlet({
    id: 'Section1',
    position: OutletPosition.BEFORE,
    component: HomeOutletComponent
  }),
  provideConfig(<SmartEditConfig>{
    smartEdit: {
      storefrontPreviewRoute: 'cx-preview',
      allowOrigin: 'localhost:9002'
    }
  })]
})
export class SpartacusConfigurationModule { }
