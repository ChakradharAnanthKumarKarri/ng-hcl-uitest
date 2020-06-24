import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as RegionActions from '../actions/region.action';
import Region from '../models/region.model';
import RegionState from '../states/region.state';

import * as CountryActions from '../actions/country.action';
import Country from '../models/country.model';
import CountryState from '../states/country.state';

import { AppState  } from '../app.state';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {
  region$: Observable<RegionState>;
  RegionSubscription: Subscription;
  Regions: Region[] = [];
  selectedRegion: Region;

  country$: Observable<CountryState>;
  CountrySubscription: Subscription;
  Countries: Country[] = [];
  selectedCountry: Country;

  isLoadCountry = false;

  constructor(private store: Store<AppState>) {
    this.region$ = store.pipe(select('regions'));
    this.country$ = store.pipe(select('countries'));
  }

  ngOnInit(): void {
    this.RegionSubscription = this.region$
      .pipe(
        map(x => {
          this.Regions = x.Regions;
        })
      )
      .subscribe();

    this.CountrySubscription = this.country$
      .pipe(
        map(x => {
          this.Countries = x.Countries;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.RegionSubscription) {
      this.RegionSubscription.unsubscribe();
    }
    if (this.CountrySubscription) {
      this.CountrySubscription.unsubscribe();
    }
  }

  onChangedRegion(region: Region): void {
    this.selectedRegion = region;
    if (this.selectedRegion?.name) {
      this.store.dispatch(CountryActions.BeginGetCountryAction({ region }));
    } else {
      this.Countries = [];
    }
    this.selectedCountry = null;
    this.isLoadCountry = false;
  }

  onChangedCountry(country: Country): void {
    this.selectedCountry = country?.name ? this.Countries.find(c => c.name === country.name) : null;
    this.isLoadCountry = false;
  }

  loadCountry() {
    this.isLoadCountry = (this.selectedRegion?.name?.length > 0 && this.selectedCountry?.name?.length > 0);
  }

}
