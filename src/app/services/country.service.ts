import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Country from '../models/country.model';
import Region from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private ApiURL = 'https://restcountries.eu/rest/v2/region/';
  constructor(private httpclient: HttpClient) {}

  getCountries(region: Region): Observable<Country[]> {
    return this.httpclient.get<Country[]>(`${this.ApiURL}${region.name}`);
  }
}
