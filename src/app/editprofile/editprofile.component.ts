import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private router:Router,private service:ApiService,private route:ActivatedRoute) { }

  driver;
  driverId;
  ngOnInit() {
    this.route.params.subscribe(res=>{
      console.log(res.driverId);
      let key = res.driverId;
      this.driverId = key;
        this.service.getDriver(key).subscribe(driver=>{
          this.driver =driver;
          console.log(this.driver);
        });
  })
}


update(){
  this.service.updateDriver(this.driverId, this.driver).then(res=>{
    this.router.navigate(['dashboard/'])
  },err=>{
    console.log(err);
  })
}



}
