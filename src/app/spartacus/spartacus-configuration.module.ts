import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import {CheckoutConfigurationModule} from "./checkout-configuration/checkout-configuration.module";
import {GERMAN_TRANSLATIONS} from "./translations/i18n";
import {LayoutConfigurationModule} from "./layout-configuration/layout-configuration.module";

@NgModule({
  declarations: [],
  imports: [
    CheckoutConfigurationModule,
    LayoutConfigurationModule
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
  })]
})
export class SpartacusConfigurationModule { }
