import { TInitialAction, ACTIONS_TYPES } from '../types';

const { GET_INITIAL } = ACTIONS_TYPES;

export const initial = (): TInitialAction => (
  {
    type: GET_INITIAL
  }
);
