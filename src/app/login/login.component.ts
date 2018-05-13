import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }
err;
account ={
  email:'moeidsaleem@gmail.com',
  password:'moeid123'
}

// account ={
//   email:'saudnaeem@gmail.com',
//   password:'saud123'
// }





  ngOnInit() {
  }


  login(){
    this.service.login(this.account).then(res=>{
      console.log(res.uid);
      localStorage.setItem('uid', res.uid);
      this.service.uid = localStorage.getItem('uid');
      this.service.loggedIn =true;
     // this.service.uid =res.uid;
      this.service.setUser(res.uid);
      this.router.navigate(['/dashboard']);
    },err=>{
      this.err=err.message;
    });

  }

}
