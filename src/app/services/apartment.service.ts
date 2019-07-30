import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Apartment } from '../shared/apartment.interface'

@Injectable({
  providedIn: 'root'
})

export class ApartmentService {

  private cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  private apartments = [];
  apartmentsChanged$ = new Subject<any[]>();
  currentPage: number;
  currentSearch = '';

  constructor(private http: HttpClient) { }

  findApertment(searchTerm: string) {

    this.currentPage = 1;
    this.currentSearch = searchTerm;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('action', 'search_listings');
    searchParams = searchParams.append('place_name', searchTerm);
    searchParams = searchParams.append('listing_type', 'rent');
    searchParams = searchParams.append('encoding', 'json');
    searchParams = searchParams.append('pretty', '1');
    searchParams = searchParams.append('page', '1');

    let apiUrl = 'http://api.nestoria.co.uk/api?action=search_listings';

    this.http.get<{ request : {}, response: { listings: []}}>(this.cors_api_url + apiUrl, {params :searchParams }).subscribe((data) => {
      this.apartments = data.response.listings;
      this.apartmentsChanged$.next(this.apartments);
    });
  }

  showMore() {
    this.currentPage += 1;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('action', 'search_listings');
    searchParams = searchParams.append('place_name', 'london');
    searchParams = searchParams.append('listing_type', 'rent');
    searchParams = searchParams.append('encoding', 'json');
    searchParams = searchParams.append('pretty', '1');
    searchParams = searchParams.append('page', this.currentPage.toString());

    let apiUrl = 'http://api.nestoria.co.uk/api?action=search_listings';

    this.http.get<{ request: {}, response: { listings: Apartment[] } }>(this.cors_api_url + apiUrl, {params: searchParams }).subscribe((data) => {
      this.apartments.push(...data.response.listings);
      this.apartmentsChanged$.next(this.apartments);
    })    
  }

  getApartments(): Apartment[] {
    return this.apartments;
  }

  getApartmentByIndex(index: number): Apartment {
    if(this.apartments[index]) {
          return this.apartments[index];
    }
  }
}
