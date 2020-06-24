import { createAction, props  } from '@ngrx/store';
import Country from '../models/country.model';
import Region from '../models/region.model';

export const GetCountryAction = createAction('[Country] - Get Country');

export const BeginGetCountryAction = createAction(
    '[Country] - Begin Get Country',
    props<{ region: Region }>());

export const SuccessGetCountryAction = createAction(
    '[Country] - Success Get Country',
    props<{ payload: Country[] }>()
  );

export const ErrorCountryAction = createAction('[Country] - Error', props<Error>());
