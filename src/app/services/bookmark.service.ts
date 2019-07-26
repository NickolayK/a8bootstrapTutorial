import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {
  private bookMarks = [];
  bookMarkChange$ = new Subject<any[]>();

  constructor() { }

  toggleBookMark(apartment: any) {
    const index = this.bookMarks.indexOf(apartment);
    if(index === -1) {
      this.bookMarks.push(apartment);
    }else {
      this.bookMarks.splice(index, 1);
    }
    this.bookMarkChange$.next(this.bookMarks);
  }

  getBookMarks() {
    return this.bookMarks;
  }

  cheackIsBookMarked(apartment: any) {
   return this.bookMarks.some((item) => {
     return item === apartment;
    })
  }

  getBookMarkByIndex(index: number) {
    if(this.bookMarks[index]) {
      return this.bookMarks[index];
    }
  }
}
