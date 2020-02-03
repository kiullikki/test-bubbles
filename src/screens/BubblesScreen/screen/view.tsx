import React, { ReactElement, ChangeEvent, FormEvent } from 'react';
import { DICTIONARY } from './constants';
import { Bubble } from 'components';
import './styles.css';

interface IOwnProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  clickBubble: (id: string) => () => void;
  inputValue: string;
  bubbles: string[];error: string;
}

export function BubblesScreenView(props: IOwnProps): ReactElement {
  const { ADD, NAME } = DICTIONARY;
  const { onSubmit, inputValue, onChange, bubbles, clickBubble, error } = props;
  const isBubbles = bubbles.length > 0;

  const renderChildrenBubbles = (bubblesList: string[]): ReactElement => (
    <div className="bubbles__inner">
      {
        bubblesList.map(
          (item: string) => (
            <Bubble
              key={item}
              id={item}
              clickBubble={clickBubble(item)}
              renderChildrenBubbles={renderChildrenBubbles}
            />
          )
        )
      }
    </div>
  );

  return (
    <main className="bubbles">
      <section className="bubbles__control">
        <form
          className="bubbles__form"
          onSubmit={onSubmit}
        >   
          <label htmlFor='name-bubble'>{NAME}</label>
          <div>
            <input
              id="name-bubble"
              type="text"
              className={`bubbles__input ${!!error && 'bubbles__input--error'}`}
              value={inputValue}
              onChange={onChange}
            />
            <button className="bubbles__btn">
              <span>{ADD}</span>
            </button>
          </div>
          {
            !!error && <p className="bubbles__error">{error}</p>
          }
        </form>
      </section>
      <section>
        {
          isBubbles
            ? bubbles.map(
                (item: string) => (
                  <Bubble
                    key={item}
                    id={item}
                    clickBubble={clickBubble(item)}
                    renderChildrenBubbles={renderChildrenBubbles}
                  />
                )
              )
            : null
        }
      </section>
    </main>
  );
}

