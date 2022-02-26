import { NgModule, DoBootstrap, ApplicationRef, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap { 
  constructor(private inj:Injector){

  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
    appRef.bootstrap(AppComponent)
    }
   const customElement= createCustomElement(AppComponent,{injector:this.inj})  
    customElements.define('custom-elem',customElement)
  }
}
