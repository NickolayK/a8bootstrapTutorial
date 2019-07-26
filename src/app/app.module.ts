import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';


import {
   FormsModule,
   ReactiveFormsModule 
} from '@angular/forms';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsListComponent } from './apartments/apartments-list/apartments-list.component';
import { SearchApartmentComponent } from './apartments/search-apartment/search-apartment.component';
import { ApartmentItemComponent } from './apartments/apartments-list/apartment-item/apartment-item.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkItemComponent } from './bookmark-list/bookmark-item/bookmark-item.component';
import { DetailComponent } from './apartments/apartments-list/detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    ApartmentsListComponent,
    SearchApartmentComponent,
    ApartmentItemComponent,
    BookmarkListComponent,
    BookmarkItemComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
