import { Component, OnInit } from '@angular/core';
import {CartDetailsComponent} from "@spartacus/storefront";

@Component({
  selector: 'app-new-cart',
  templateUrl: './new-cart.component.html',
  styleUrls: ['./new-cart.component.scss']
})
export class NewCartComponent extends CartDetailsComponent{

  onChange(entryNumber: any, event: any) {
    this.activeCartService.updateEntry(entryNumber, event.target.value);
  }

}
