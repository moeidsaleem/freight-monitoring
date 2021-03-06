import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MapComponent } from './map/map.component';
import { HaversineService } from "ng2-haversine";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { ApiService } from './api.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { EditprofileComponent } from './editprofile/editprofile.component';


let ROUTES =[
{ path:'', redirectTo:'landing', pathMatch:'full'},
{ path:'login', component:LoginComponent},
{ path:'landing', component:LandingComponent},
{ path:'signup', component:SignupComponent},
  { path:'dashboard', component:DashhomeComponent, CanActivate:[AuthGuard] ,children:[
    { path:'', redirectTo:'home', pathMatch:'full'},
    {path:'driver',component:DriverComponent},
    {path:'edit',component:EditprofileComponent},
    {path:'home', component:DashboardComponent},
    {path:'profile', component:ProfileComponent}
  ]
},

  ];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DriverComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ProfileComponent,
    DashhomeComponent,
    EditprofileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiYP6TvmfQX1SF1zMudA4H4-qaiX56Ims'
    }),
    RouterModule.forRoot(ROUTES),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule
    
  ],
  providers: [HaversineService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
