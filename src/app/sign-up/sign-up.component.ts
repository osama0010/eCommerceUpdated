import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  isLoading: boolean = false;
  apiError: string = "";
  isNotValidForm: boolean = false;
  constructor(private _AuthService: AuthService, private _router: Router) {

  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    rePassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  })

  register(form: FormGroup) {
    this.isLoading = true
    if (form.valid) {
      this._AuthService.register(form.value).subscribe({
        next: (res: any) => {
          if(res.message ==='success'){
            this.isLoading=false;
            this._router.navigate(['/login'])
            // navigate login
          }
        },
        error: (err) => {
          this.isLoading=false;
          this.apiError = err.error.errors.msg
        },
      })
    }
  }

}

