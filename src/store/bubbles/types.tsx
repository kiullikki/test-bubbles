export enum ACTIONS_TYPES {
  ADD_BUBBLE = 'ADD_BUBBLE',
  ADD_TOP_LEVEL_BUBBLE = 'ADD_TOP_LEVEL_BUBBLE'
}

export interface IAddBubbleAction {
  type: typeof ACTIONS_TYPES.ADD_BUBBLE;
  payload: IAddBubbleParams;
}

export interface IAddTopLevelBubbleAction {
  type: typeof ACTIONS_TYPES.ADD_TOP_LEVEL_BUBBLE;
  payload: string;
}

export type TBubblesAction = IAddBubbleAction & IAddTopLevelBubbleAction;

export interface IBubblesStore {
  allBubbles: IBubblesList;
  topLevel: string[] | [];
}

type IBubblesList = {
  [key: string]: IBubble;
}

export interface IBubble {
  id: string;
  name: string;
  childernBubbles: string[] | [];
}

export interface IAddBubbleParams {
  parentId: string;
  name: string;
}