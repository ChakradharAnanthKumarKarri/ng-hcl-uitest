import Region from '../models/region.model';

export default interface RegionState {
    Regions: Array<Region>;
}

export const initializeState = (): RegionState => {
    return {
        Regions: Array<Region>(
            { name: 'Europe' },
            { name: 'Asia' }
        )
    };
};
