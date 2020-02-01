import { IGitMappingStore } from './gitMapping/types';
import { TGitMappingAction } from './gitMapping/types';

export interface IStore {
  gitMapping: IGitMappingStore;
}

export type TAppAction = TGitMappingAction;