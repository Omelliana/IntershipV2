import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersModule } from './modules/users/users.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modules/users/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
