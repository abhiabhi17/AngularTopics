import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { product } from "../product";
import { Subject, map } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class ProductService implements OnInit{
    error=new Subject<string>();
    
    allProducts:product[]=[]; //for displaying all products on view
isFetching:boolean=false;
    ngOnInit(): void {
    
    }

    
    constructor(private httpClient:HttpClient){}
    //creating product in database
    createProduct(products:product)
    {
        const headers=new HttpHeaders({'myHeader':'Abhi'});
        this.httpClient.post<{name:string}>('https://angularhttp-a8876-default-rtdb.firebaseio.com/products.json',
        products,{headers:headers})
        .subscribe((res)=>{
         console.log(res);
        },(err)=>{this.error.next(err.message)});
    }


    fetchProduct()
    {
        const header=new HttpHeaders()
                         .set('content-type','application/json')
                         .set('Access-Control-Allow-Origin','*')
        
        const params=new HttpParams()
                       .set('print','pretty')
                         return this.httpClient.get<{[key:string]:product}>('https://angularhttp-a8876-default-rtdb.firebaseio.com/products.json',
        {'headers':header,params:params})
        .pipe(map((res)=>{
          const products=[];
                  for(const key in res)
                  {
                    if (res.hasOwnProperty(key))
                    {
                      products.push({...res[key],id:key})    
                   }
                  
                  }
                  return products;
        }))
       
    }
    deleteProduct(id:string)
    {
        let  header=new HttpHeaders();
         header=header.append('myHeader1','Value1');
         header=header.append('myHeader2','Value2');
        this.httpClient.delete('https://angularhttp-a8876-default-rtdb.firebaseio.com/products/' +id+'.json',{headers:header}).subscribe();

    }

    deleteAllProducts()
    {
 
        this.httpClient.delete('https://angularhttp-a8876-default-rtdb.firebaseio.com/products.json').subscribe();
 
    }

    updateProduct(id:string,value:product) 
    {
        this.httpClient.put('https://angularhttp-a8876-default-rtdb.firebaseio.com/products/' +id+'.json',value).subscribe();
    }
        
    
       
}