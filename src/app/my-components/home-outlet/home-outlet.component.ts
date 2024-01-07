import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product, ProductService} from "@spartacus/core";
import {CurrentProductService} from "@spartacus/storefront";


@Component({
  selector: 'app-home-outlet',
  templateUrl: './home-outlet.component.html',
  styleUrls: ['./home-outlet.component.scss']
})
export class HomeOutletComponent implements OnInit {

  hotProduct$: Observable<Product> = this.service.get('553637');
  currentProduct: Observable<Product> = this.currentService.getProduct() as Observable<Product>;
  constructor(private service: ProductService, private currentService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
