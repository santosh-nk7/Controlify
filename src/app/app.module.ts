import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
