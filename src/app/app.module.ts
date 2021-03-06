import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { CollegesComponent } from './colleges/colleges.component';
import { CollegeService } from './services/college.service';


@NgModule({
  declarations: [
    AppComponent,
    CollegesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule
  ],
  providers: [CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
