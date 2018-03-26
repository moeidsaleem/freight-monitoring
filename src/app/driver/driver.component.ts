import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  data;
  ico ='https://www.metlink.org.nz/themes/metlink2015/images/icons/train.svg';
  label ='train1'
   constructor(private router:Router, private route:ActivatedRoute, private service:ApiService){
     //this.data = db.object('data').valueChanges();
   }
   location;
   driver:any;
   maintenance:any;
   fuel:any;
   trip:any;
   ngOnInit() {
    this.route.params.subscribe(res=>{
      console.log(res.driverId);
      let key = res.driverId;
      this.service.getDriver(key).subscribe(driver=>{
        this.driver =driver;
        console.log(this.driver);
      });
    this.service.getDriverLoc(key).subscribe(location=>{
      console.log(res);
      this.location =location;
      this.service.currentLoc = location;
    });
    this.service.getFuel(key).subscribe(fuel=>{
      this.fuel =fuel;
    });
    this.service.getMaintenance(key).subscribe(main=>{
      this.maintenance = main;
      // console.log(this.maintenance);

    })
    this.service.getTrip(key).subscribe(trips=>{
      this.trip = trips;
      console.log(this.trip);
    })
     this.data = this.service.currentLoc;
    
       
     })
 }

 fetchDriver(){
  //  this.service.getDriver()
 }
   //items: Observable<any>;
   
   title: string = 'FMS Driver Logs';
   // lat: number = 33.5984;
   // long: number = 73.0441;
   i = 100;
 
   
 }
 