import { NgModule, DoBootstrap, ApplicationRef, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA     //To use custom elements inside angular application
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap { 
  constructor(private inj:Injector){
    const customElement= createCustomElement(AppComponent,{injector:this.inj})  
     customElements.define('custom-elem',customElement)
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
    // appRef.bootstrap(AppComponent)
    }
  }
  }
