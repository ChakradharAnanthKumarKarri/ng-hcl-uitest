import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { AppState } from './app.state';

import { RegionReducer } from './reducers/region.reducer';
import { CountryReducer } from './reducers/country.reducer';

const Reducers: ActionReducerMap<AppState> = {
    regions: RegionReducer,
    countries: CountryReducer,
};

@NgModule({
    imports: [
        StoreModule.forRoot(Reducers)
    ],
    exports: [StoreModule]
})
export class AppReducersModule { }
