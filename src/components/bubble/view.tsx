import React, { ReactElement } from 'react';
import { IBubble } from 'store/bubbles';
import './styles.css';

export interface IConnectProps {
  bubble: IBubble;
}

export interface IOwnProps {
  id: string;
  clickBubble: () => void;
  renderChildrenBubbles: (bubbles: string[]) => ReactElement;
}

export function BubbleView(props: IConnectProps & IOwnProps): ReactElement {
  const { bubble, clickBubble, renderChildrenBubbles } = props;
  const isChildrens = bubble?.childernBubbles.length > 0;
  return (
    <>
      <div className="bubble-item">
        <p className="bubble-item__name">{bubble.name}</p>
        <button type="button" className="bubble-item__btn" onClick={clickBubble}>
          +
        </button>
      </div>
      {
        isChildrens
          ? renderChildrenBubbles(bubble.childernBubbles)
          : null
      }
    </>
  );
}

