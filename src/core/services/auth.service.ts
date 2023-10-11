import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any> = new BehaviorSubject('')
  constructor(private _http:HttpClient , private _router:Router) {
    if(localStorage.getItem("userToken")){
      this.getUserData()
    }
   }
  getUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem("userToken"))
    let encoded = jwtDecode(encodedToken)
    this.userData.next(encoded)
    console.log(this.userData);
    
  }
  register(data:any):Observable<any>{
  return this._http.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data)
  }
  login(data:any):Observable<any>{
    return this._http.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data)
    }
  logOut(){
    localStorage.removeItem("userToken")
    this.userData.next(null)
    this._router.navigate(['/login'])
  }
}
