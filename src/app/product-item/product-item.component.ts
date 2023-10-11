import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../shared/services/cart.service';
import { WishlistService } from '../shared/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  allProducts:Product[]=[]
  @Input() product:Product = {} as Product

  constructor(private _CartService:CartService,private _wishlistService:WishlistService){

  }

  addToCart(id:string){
    this._CartService.addProductCart(id).subscribe({
      next: (res)=> {
        console.log(res);
        
      }
    })
  }

  addWsh(prodId:string):void{
    this._wishlistService.addToWishList(prodId).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }

}
