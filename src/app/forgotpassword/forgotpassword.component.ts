import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotpassService } from 'src/core/services/forgotpass.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private _forgotpassService:ForgotpassService,private _router:Router){

  }
  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;
  email:string = '';
  userMsg:string = '';

  forgotForm:FormGroup = new FormGroup({
    email:new FormControl ('',[Validators.required, Validators.email])
  })
  ResetCodeForm:FormGroup = new FormGroup({
    resetCode:new FormControl ('',[Validators.required])
  })
  resetPassword:FormGroup = new FormGroup({
    newPassword:new FormControl ('',[Validators.required])
  })

  forgotPassword():void{
    let userEmail = this.forgotForm.value
    this.email = userEmail.email
    this._forgotpassService.forgotPassword(userEmail).subscribe({
      next:(res)=>{
        console.log(res);
        this.userMsg = res.message
        this.step1 = false
        this.step2 = true
      }, error:(err)=> {
        this.userMsg = err.error.message
      }

    })
  }  
  resetCode():void{
    let resetCode = this.ResetCodeForm.value
    this._forgotpassService.resetCode(resetCode).subscribe({
      next:(res) => {
        console.log(res);
        this.userMsg=res.status
        this.step2=false;
        this.step3=true;
      },
      error:(err) => {
        this.userMsg=err.error.message
      }
    })
  }
  newPassword():void{
    let ResetForm = this.resetPassword.value;
    ResetForm.email = this.email;

  this._forgotpassService.resetPassword(ResetForm).subscribe({
      next: (res) => {
        console.log(res);
        if(res.token){
          localStorage.setItem('userToken',res.token);
          this._router.navigate(['/home']);
        }
      }, 
      error: (err) => {
        this.userMsg = err.error.message
      }
    })
    }

  }