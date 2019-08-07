import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-apartment-item',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.scss']
})

export class ApartmentItemComponent implements OnInit {

  @Input() apartment: any;
  @Input() inBookMark: boolean;
  @Input() index: number;
  @Output() addBookMark = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }

  onBookMark() {
    this.addBookMark.emit(this.apartment);
  }
}
