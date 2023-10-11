import { Product } from '../product';
import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../shared/services/wishlist.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  allProducts:Product[]=[]
  @Input() product:Product = {} as Product
  constructor(private _wishlistService:WishlistService,private _CartService:CartService){

  }
ngOnInit(): void {
  this._wishlistService.getToWishList().subscribe({
    next:(res)=>{
      console.log(res);
      this.allProducts = res.data
    }
  })
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
removeItemWish(prodId:string):void{
  this._wishlistService.removeItemWsh(prodId).subscribe({
    next:(res)=>{
      console.log(res);
      this._wishlistService.getToWishList().subscribe({
        next:(res)=>{
          this.allProducts = res.data
        }
      })
    }
  })
}
}
