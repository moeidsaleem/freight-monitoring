import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }


  ngOnInit() {
  }


  logout(){
    localStorage.removeItem('uid');
    this.service.uid ='';
    this.router.navigate(['/login'])

  }

  goProfile(){
    console.log('go to profile');
    this.router.navigate(['/dashboard/profile'])
  }
}
