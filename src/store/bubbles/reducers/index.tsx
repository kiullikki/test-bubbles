import { TBubblesAction, ACTIONS_TYPES, IBubblesStore, IBubble } from '../types';
import { makeId } from '../utils';

const { ADD_BUBBLE, ADD_TOP_LEVEL_BUBBLE } = ACTIONS_TYPES;

const INITIAL_STATE: IBubblesStore = {
  allBubbles: {},
  topLevel: []
};

export const bubblesReducer = (state = INITIAL_STATE, action: TBubblesAction): IBubblesStore => {
  const { type } = action;
  switch (type) {
    case ADD_BUBBLE: {
      const { payload } = action;
      const { parentId, name } = payload;
      const updateBubble: IBubble = state.allBubbles[parentId];
      const newId: string = makeId();
      const newBubble = {
        id: newId,
        name,
        childernBubbles: []
      }
      const { id, childernBubbles } = updateBubble;
      return {
        ...state,
        allBubbles: {
          ...state.allBubbles,
          [newId]: newBubble,
          [id]: {
            ...updateBubble,
            childernBubbles: [...childernBubbles, newId]
          }
        }
      };
    }
    case ADD_TOP_LEVEL_BUBBLE: {
      const { payload } = action;
      const newId: string = makeId();
      const newBubble = {
        id: newId,
        name: payload,
        childernBubbles: []
      }
      return {
        ...state,
        allBubbles: {
          ...state.allBubbles,
          [newId]: newBubble,
        },
        topLevel: [...state.topLevel, newId]
      }
    }
    default:
      return state;
  }
};
