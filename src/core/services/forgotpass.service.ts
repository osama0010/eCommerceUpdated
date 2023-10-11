import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassService {

  constructor(private _httpClient:HttpClient) { }

  forgotPassword(userEmail:Object):Observable<any> {
    return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",userEmail)
  }
  resetCode(resetCode:Object):Observable<any> {
    return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",resetCode)
  }
  resetPassword(resetPasswordForm:object):Observable<any> {
    return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",resetPasswordForm)
  }
}
