import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../services/bookmark.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  subscription: Subscription;
  bookmarks = [];
  constructor(private bookMarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarks = this.bookMarkService.getBookMarks();
    this.subscription = this.bookMarkService.bookMarkChange$.subscribe((bookmarks) => {
      this.bookmarks = bookmarks;
    })
  }

  onRemoveFromBookMark(bookMark: any) {
     this.bookMarkService.toggleBookMark(bookMark);
  }
}
