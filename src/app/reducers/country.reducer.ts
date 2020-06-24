import { Action, createReducer, on  } from '@ngrx/store';
import * as CountryActions from '../actions/country.action';
import Country from '../models/country.model';
import CountryState, { initializeState } from '../states/country.state';

export const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(CountryActions.GetCountryAction, state => state),
    on(CountryActions.SuccessGetCountryAction, (state: CountryState, { payload }) => {
        return { ...state, Countries: payload, CountryError: null };
    }),
    on(CountryActions.ErrorCountryAction, (state: CountryState, error: Error) => {
        return { ...state, CountryError: error };
    })
);

export function CountryReducer(
    state: CountryState | undefined,
    action: Action
): CountryState {
    return reducer(state, action);
}
