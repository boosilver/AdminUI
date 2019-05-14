import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions } from '@angular/http';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { LoadingModule } from 'ngx-loading';
import { AppRoutes } from './app.routes';

// Component
import { GeneratekeypairComponent } from './generatekeypair/generatekeypair.component';
import { CheckkeyComponent } from './checkkey/checkkey.component';
// end Component

// Service
import { PROCURETOPAYService } from './service/procuretopay.service';
//end Service


@NgModule({
  declarations: [
    AppComponent,
    GeneratekeypairComponent,
    CheckkeyComponent,
   
    

  ],
  imports: [
    HttpModule, CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    LoadingModule
  ],
  providers: [PROCURETOPAYService],
  bootstrap: [AppComponent]
})
export class AppModule { }
