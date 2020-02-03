import { IAddBubbleAction, IAddBubbleParams, IAddTopLevelBubbleAction, ACTIONS_TYPES } from '../types';

const { ADD_BUBBLE, ADD_TOP_LEVEL_BUBBLE } = ACTIONS_TYPES;

export const addBubbleAction = (payload: IAddBubbleParams): IAddBubbleAction => ({
  type: ADD_BUBBLE,
  payload
})

export const addTopLevelBubbleAction = (payload: string): IAddTopLevelBubbleAction => ({
  type: ADD_TOP_LEVEL_BUBBLE,
  payload
})
