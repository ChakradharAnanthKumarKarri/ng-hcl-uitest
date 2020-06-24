import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CountryActions from '../actions/country.action';
import Country from '../models/country.model';
import { CountryService } from '../services/country.service';

@Injectable()
export class CountryEffects {
  constructor(private countrySvc: CountryService, private action$: Actions) {}

  GetCountries$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CountryActions.BeginGetCountryAction),
      mergeMap(action =>
        this.countrySvc.getCountries(action.region).pipe(
          map((data: Country[]) => {
            return CountryActions.SuccessGetCountryAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(CountryActions.ErrorCountryAction(error));
          })
        )
      )
    )
  );
}
