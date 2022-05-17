import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-reactive-email',
  templateUrl: './reactive-email.component.html',
  styleUrls: ['./reactive-email.component.css']
})
export class ReactiveEmailComponent implements OnInit {
  emailFrm : FormGroup ;
  constructor() { 
    this.emailFrm = new FormGroup({
      email : new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}')
      ]),
      fullName : new FormControl('',[
        Validators.pattern('[A-Za-z]{5,20}'),
        Validators.minLength(5)
      ])
    });
    
  }
  
  ngOnInit(): void {}
  onFormSubmit(){
    console.log(this.emailFrm)
  }
  get email(){
    return this.emailFrm.get('email')
  }
  get fullName(){
    return this.emailFrm.get('fullName')
  }

}
