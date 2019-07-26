import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss']
})
export class BookmarkItemComponent implements OnInit {

  @Input() bookmark:any;
  @Output() removeFromBookMark = new EventEmitter<any>();
  @Input() index:number;

  constructor(private router: Router) { }

  ngOnInit() { }

  onRemoveFromBookMark() {
     this.removeFromBookMark.emit(this.bookmark);
  }
  goToDetail() {
    this.router.navigate(['bookmarks', this.index, 'detail']);
  }
}
