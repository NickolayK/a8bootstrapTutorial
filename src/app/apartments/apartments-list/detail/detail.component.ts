import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { Location } from '@angular/common';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  id: number;
  apartment: any;
  mark: string;
  cheack: boolean;
  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              private _location: Location,
              private bookMarkService: BookmarkService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.mark = params['mark'];
      
      if(this.mark === 'bookmarks') {
        this.apartment = this.bookMarkService.getBookMarkByIndex(this.id);
      }else {
        this.apartment = this.apartmentService.getApartmentByIndex(this.id);
      }

      this.cheack = this.bookMarkService.cheackIsBookMarked(this.apartment);
    });
  }

  onReturn() {
    this._location.back();
  }

  onBookMark() {
    this.bookMarkService.toggleBookMark(this.apartment);
    this.cheack = this.bookMarkService.cheackIsBookMarked(this.apartment);
  }
}
