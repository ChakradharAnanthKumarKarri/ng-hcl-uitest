import Country from '../models/country.model';

export default interface CountryState {
    Countries: Array<Country>;
    CountryError: Error;
}

export const initializeState = (): CountryState => {
    return {
        Countries: Array<Country>(),
        CountryError: null
    };
};
