import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Apartment } from '../shared/apartment.interface'

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {
  private bookMarks = [];
  bookMarkChange$ = new Subject<any[]>();

  constructor() { }

  toggleBookMark(apartment: any) {
    const index = this.bookMarks.indexOf(apartment);
    index === -1 ? this.bookMarks.push(apartment) : this.bookMarks.splice(index, 1);
    this.bookMarkChange$.next(this.bookMarks);
  }

  getBookMarks(): Array<Apartment> {
    return this.bookMarks;
  }

  cheackIsBookMarked(apartment: any): boolean {
   return this.bookMarks.some((item) => {
     return item === apartment;
    })
  }

  getBookMarkByIndex(index: number): Apartment {
    if(this.bookMarks[index]) {
      return this.bookMarks[index];
    }
  }
}
