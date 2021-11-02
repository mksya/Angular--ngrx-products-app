import {Action} from '@ngrx/store';
import {Product} from '../model/product.model';

export enum ProductsActionsTypes{
  /* Get All products*/
  GET_ALL_PRODUCTS="[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",

 /* Get Selected products*/
  GET_SELECTED_PRODUCTS="[Products] Get Selected products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected products Error",

   /* Search products*/
   SEARCH_PRODUCTS="[Products] Search products",
   SEARCH_PRODUCTS_SUCCESS="[Products] Search products Success",
   SEARCH_PRODUCTS_ERROR="[Products] Search products Error",

   /* Select product*/
   SELECT_PRODUCT="[Product] Select product",
   SELECT_PRODUCT_SUCCESS="[Product] Select product Success",
   SELECT_PRODUCT_ERROR="[Product] Select product Error",

    /* Delete product*/
    DELETE_PRODUCT="[Product] Delete product",
    DELETE_PRODUCT_SUCCESS="[Product] Delete product Success",
    DELETE_PRODUCT_ERROR="[Product] Delete product Error",

    /* NEW product*/
    NEW_PRODUCT="[Product] New product",
    NEW_PRODUCT_SUCCESS="[Product] New product Success",
    NEW_PRODUCT_ERROR="[Product] New product Error",

     /* SAVE product*/
     SAVE_PRODUCT="[Product] Save product",
     SAVE_PRODUCT_SUCCESS="[Product] Save product Success",
     SAVE_PRODUCT_ERROR="[Product] Save product Error",
 

}

export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetAllProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetAllProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* Get Selected Products Actions*/

export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* Search Products Actions*/

export class SearchProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload:string) {
  }
}

export class SearchProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class SearchProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* Select Product Actions*/

export class SelectProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class SelectProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}

export class SelectProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

/* Delete Product Actions*/

export class DeleteProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class DeleteProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}

export class DeleteProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

/* New Product Actions*/

export class NewProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT;
  constructor(public payload:any) {
  }
}

export class NewProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload:any) {
  }
}

export class NewProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

/* Save Product Actions*/

export class SaveProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class SaveProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}

export class SaveProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

export type ProductsActions=
    GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
    | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
    | SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError
    | SelectProductAction | SelectProductActionSuccess | SelectProductActionError
    | DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError
    | NewProductAction | NewProductActionSuccess | NewProductActionError
;
