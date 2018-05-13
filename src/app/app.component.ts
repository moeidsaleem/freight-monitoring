import { Component,OnInit} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HaversineService, GeoCoord } from 'ng2-haversine';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root', //model
  templateUrl: './app.component.html', //view
  styleUrls: ['./app.component.css'] //styling (optional)
})
export class AppComponent implements OnInit{ //logic (controller)

  data;
 ico ='https://www.metlink.org.nz/themes/metlink2015/images/icons/train.svg';
 label ='train1'
  constructor(  public db: AngularFireDatabase,private service:ApiService){
    this.data = db.object('data').valueChanges();
  }
  ngOnInit() {
    console.log(localStorage.getItem('uid'));
    this.service.uid = localStorage.getItem('uid');

}
  //items: Observable<any>;
  
  title: string = 'My first AGM project';

  i = 100;

  
}
