import { Action, createReducer, on } from '@ngrx/store';
import * as RegionActions from '../actions/region.action';
import Region from '../models/region.model';
import RegionState, { initializeState } from '../states/region.state';

export const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(RegionActions.GetRegionAction, state => state)
);

export function RegionReducer(
    state: RegionState | undefined,
    action: Action
): RegionState {
    return reducer(state, action);
}
