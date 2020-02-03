import { IStore } from "../../types";
import { IBubble } from '../types';

export const topLevelBubblesSelector = ({ bubbles }: IStore): string[] | [] => bubbles.topLevel;
export const bubbleItemSelector = (id: string) => ({ bubbles }: IStore): IBubble => bubbles.allBubbles[id] || null;