import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userRegisterForm:FormGroup;
  constructor() { 
    this.userRegisterForm=new FormGroup({
      fullName:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      userName:new FormControl('',[Validators.required,Validators.pattern('[Aa_Zz]{3,}')]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('[A]{1,}')]),
      confirmPassword:new FormControl('',[Validators.required]),
    });
  }
  get fullName(){
    return this.userRegisterForm.get('fullName')
  }
  get email(){
    return this.userRegisterForm.get('email')
  }
  get userName(){
    return this.userRegisterForm.get('userName')
  }
  get password(){
    return this.userRegisterForm.get('password')
  }
  get confirmPassword(){
    return this.userRegisterForm.get('confirmPassword')
  }
  ngOnInit(): void {
  }

}
