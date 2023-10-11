import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _httpClient:HttpClient) { }

  addToWishList(productid:string):Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',
    {
      productId:productid
    }
    )
  }
  getToWishList():Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')
  }
  removeItemWsh(productId:string):Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`)
  }
}
