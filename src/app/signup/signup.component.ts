import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
err;
  constructor(private service:ApiService,private router:Router) { }
account={
  name:'',
  email:'',
  password:''
}
  ngOnInit() {
  }

  signup(account){
    this.service.signup(this.account).then(resp=>{
      this.router.navigate(['/dashboard']);
    },err=>{
      this.err =err.message;
      console.log(err);
    })
  }

}
