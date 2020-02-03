import { IGitMappingStore, TGitMappingAction } from './gitMapping/types';
import { IBubblesStore, TBubblesAction } from './bubbles/types';

export interface IStore {
  gitMapping: IGitMappingStore;
  bubbles: IBubblesStore;
}

export type TAppAction = TGitMappingAction | TBubblesAction;