import { TGitMappingAction, ACTIONS_TYPES, IGitMappingStore } from '../types';

const { GET_INITIAL } = ACTIONS_TYPES;

const INITIAL_STATE: IGitMappingStore = {
  error: false,
  loading: false,
};

export const gitMappingReducer = (state = INITIAL_STATE, action: TGitMappingAction): IGitMappingStore => {
  const { type } = action;
  switch (type) {
    case GET_INITIAL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
