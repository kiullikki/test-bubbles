import { gitMappingReducer } from './gitMapping';
import { bubblesReducer } from './bubbles';

export const rootReducer = {
    gitMapping: gitMappingReducer,
    bubbles: bubblesReducer
};
