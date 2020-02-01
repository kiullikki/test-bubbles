export enum ACTIONS_TYPES {
  GET_INITIAL_SUCCESS = 'GET_INITIAL_SUCCESS',
  GET_INITIAL = 'GET_INITIAL',
  GET_INITIAL_FAIL = 'GET_INITIAL_FAIL'
}

export interface TInitialAction {
  type: typeof ACTIONS_TYPES.GET_INITIAL;
}

export type TGitMappingAction = TInitialAction;

export interface IGitMappingStore {
  error: boolean;
  loading: boolean;
}