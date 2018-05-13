import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class ApiService {

  constructor(private afuth:AngularFireAuth, private db:AngularFireDatabase) { }


  uid;
  _user;
  loggedIn:boolean =false;
  signup(account){
  return  this.afuth.auth.createUserWithEmailAndPassword(account.email, account.password).then(res=>{
      this.uid =res.uid;
      // Af Authentication! 
         this.db.object('users/management/'+res.uid).set({
           uid:res.uid,
           name:account.name,
           email:account.email,
           password: account.password
         });
         this.setUser(res.uid);
    });

  }

  login(account){
    return this.afuth.auth.signInWithEmailAndPassword(account.email, account.password)
  
  }
  updateDriver(driverId, driver){
    return this.db.object('users/drivers/'+driverId).update(driver);

  }
  deleteDriver(driverId){
    return this.db.object('users/drivers/'+driverId).remove();
  }

  setUser(uid){
      //Af Login Auth
      this.db.object('/users/management/'+uid).valueChanges().subscribe(res=>{
        this._user =res;
      })
  }

currentLoc;
  getDrivers(){
    // fetch all drivers data,,, 
  return  this.db.list('users/drivers/').snapshotChanges();
  }
  getDriver(key){
     return this.db.object('users/drivers/'+key).valueChanges();
  }
  getDriverLoc(key){
    return this.db.object('driver_location/'+key).valueChanges();
  }
  getTrip(key){
    return this.db.list('trip_summary/'+key).valueChanges();
  }

  getMaintenance(key){
    return this.db.list('maintenance/'+key).valueChanges();
  }
  getFuel(key){
    return this.db.list('fuel/'+key).valueChanges();
  }
}
