import {
   Component,
   OnInit,
   OnDestroy
  } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';
import { Subscription } from 'rxjs';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-apartments-list',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.scss']
})

export class ApartmentsListComponent implements OnInit, OnDestroy {
  apartmentsSunscription: Subscription;
  bookmarksSunscription: Subscription;
  apartments = [];
  bookmarks = [];

  constructor(private apartmentService: ApartmentService,
              private bookmarkService: BookmarkService,
              private bookMarkService: BookmarkService,
  ) { }

  ngOnInit() {
    this.apartmentsSunscription = this.apartmentService.apartmentsChanged$.subscribe((data) => {
        this.apartments = data;
    });

    this.bookmarksSunscription = this.bookmarkService.bookMarkChange$.subscribe((data) => {
        this.bookmarks = data;
    });

    this.apartments = this.apartmentService.getApartments();
    this.bookmarks = this.bookmarkService.getBookMarks();
  }

  onShowMore() {
    this.apartmentService.showMore();
  }

  ngOnDestroy() {
    this.apartmentsSunscription.unsubscribe();
    this.bookmarksSunscription.unsubscribe();
  }

  onAddBookMark(apartment: any) {
    this.bookMarkService.toggleBookMark(apartment);
  }
}
