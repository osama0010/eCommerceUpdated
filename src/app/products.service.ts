// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) {  }
  
  getProducts():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/products")
  }
  getCategories():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/categories")
  }
  getProductsById(id:string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getBrands():Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
   }

}
