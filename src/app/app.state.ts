import RegionState from './states/region.state';
import CountryState from './states/country.state';

export interface AppState {
    readonly regions: RegionState;
    readonly countries: CountryState;
}
