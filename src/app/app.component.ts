import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import data from './data.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  data = data
  constructor(public auth:AuthService){

  }

  ngOnInit(){
    
  }

  login(){
    this.auth.loginWithRedirect()
  }

  loout(){
    this.auth.logout({returnTo:window.location.origin})
  }

  ngOnDestroy(){
    // this.destroy$.next()
  }
}
