import { combineReducers, CombinedState } from 'redux';
import { gitMappingReducer } from './gitMapping';
import { Reducer } from 'react';
import { IStore } from './types';
import { TAppAction } from './types';

export const rootReducer = ():  Reducer<CombinedState<IStore>, TAppAction> => combineReducers({ gitMapping: gitMappingReducer });
