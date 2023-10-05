import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { product } from '../product';

import { ProductService } from '../service/products.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-curd',
  templateUrl: './http-curd.component.html',
  styleUrls: ['./http-curd.component.css'],
  
})
export class HttpCurdComponent  implements OnInit,OnDestroy{
  allProducts:product[]=[];//for displaying all proudcts
  isFetching:boolean=false;// for fetcing products
  @ViewChild('productsForm') form:NgForm
  editMode:boolean=false; //for updating form 
  currentProductId:string;// for current product id
  errorMessage:string=null//for error messages
  errorSub:Subscription;
  ngOnInit(): void {
    this.fetchProducts();
    this.errorSub=this.prouductService.error.subscribe((err)=>{this.errorMessage=err})
  }

  onProductsFetch()
  {
    this.fetchProducts();
  }
  constructor(private prouductService:ProductService){}
 
  //------------------------Add Product------//
  onProductCreate(products:product)
  {  
    if(!this.editMode)
    this.prouductService.createProduct(products);
  else
  this.prouductService.updateProduct(this.currentProductId,products);
  }

  //---------GET Products-----//
  private fetchProducts()
  {
    this.isFetching=true;
    this.prouductService.fetchProduct()
    .subscribe((products)=>{
     this.allProducts=products;
     this.isFetching=false;
    },(err)=>{this.errorMessage=err.message});
  }
 
//-------- Delete product -----------//
  onDeleteProduct(id:string)
  {
   this.prouductService.deleteProduct(id);
  }

  //------Delete all products------//
  onDeleteAllProducts()
  {
   this.prouductService.deleteAllProducts();
  }


  //------------For Updating with product id---------//

  onEditClicked(id:string)
  {


    this.currentProductId=id;
    //Get the product id
     let currentProduct=this.allProducts.find((p)=>{return p.id === id});
     let currentP=this.allProducts.find((p)=>{return p.id===id});
     //console.log(currentProduct);

    //populate the form

       this.form.setValue({
        pName:currentProduct.pName,
        desc:currentProduct.desc,
        price:currentProduct.price
       })
    // change the button value to update product
    this.editMode=true;
  


  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}

