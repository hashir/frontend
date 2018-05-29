import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeasewebModule } from './leaseweb/leaseweb.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LeasewebModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
