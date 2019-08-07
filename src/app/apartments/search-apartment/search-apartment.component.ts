import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-search-apartment',
  templateUrl: './search-apartment.component.html',
  styleUrls: ['./search-apartment.component.scss']
})
export class SearchApartmentComponent implements OnInit {

  searchTerm = '';

  constructor(private apartmentService: ApartmentService) { }

  onFindApartment() {
    if(this.searchTerm) {
      this.apartmentService.findApertment(this.searchTerm);
    }
  }

  ngOnInit() { }
}
