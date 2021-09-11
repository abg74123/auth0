import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';
import { ProfileComponent } from './profile/profile.component';
import {SkeletonModule} from 'primeng/skeleton';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkeletonModule,
    AuthModule.forRoot({
      ...env.auth
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
