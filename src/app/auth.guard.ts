import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private service:ApiService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    
      if(localStorage.getItem('uid')){
        this.service.uid = localStorage.getItem('uid');
        return true;
      }else{
        console.log('no uid found. error loggin in');
        return false;
      }

  }
}
