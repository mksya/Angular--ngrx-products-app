import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
    @Input() product:Product|null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
