import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DeleteProductAction, SelectProductAction } from 'src/app/ngrx/products.actions';
import {Product} from '../../../../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
    @Input() product:Product|null=null;
  constructor(private store:Store, private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(product:Product){
    this.store.dispatch(new SelectProductAction(product));
  }

  onDelete(product:Product){
    this.store.dispatch(new DeleteProductAction(product));
  }

  onEdit(product:Product){
    this.router.navigateByUrl("/editProduct/"+product.id);
  }

}
