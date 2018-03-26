import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private service:ApiService) { }

  drivers;
  ngOnInit() {
    this.service.getDrivers().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    }).subscribe(resp=>{
      this.drivers =resp;
    });
  }

  location:any;

  details(key){

    this.service.getDriver(key).subscribe(res=>{
      console.log(res);
     // this.location =res;

     // this.service.currentLoc = this.location;
     // this.service.currentLoc.driverId = key;
      console.log(key);
      this.router.navigate(['/driver',{driverId:key}])
    })
  }




}
