import React, { Component, ReactElement, ChangeEvent, FormEvent } from 'react';
import { BubblesScreenView } from './view';
import { IAddBubbleParams } from 'store/bubbles';
import { DICTIONARY } from './constants';

export interface IConnectStor {
  bubbles: string[] | [];
}

interface IConnectDispatch {
  addBubble: (props: IAddBubbleParams) => void;
  addTopLevelBubble: (name: string) => void;
}

type TConnectProps = IConnectStor & IConnectDispatch

interface IState {
  inputValue: string;
  error: string;
}

export class BubblesScreenController extends Component<TConnectProps, IState> {
  constructor(props: TConnectProps) {
    super(props)
    this.state = {
      inputValue: '',
      error: ''
    }
  };

  onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { addTopLevelBubble } = this.props;
    const { inputValue } = this.state;

    if(!!inputValue) {
      addTopLevelBubble(inputValue);

      this.clearInput()
    } else {
      this.setError()
    } 
  }

  onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { target: { value } } = event;

    this.setState({
      inputValue: value,
      error: ''
    })
  }

  clearInput = (): void => {
    this.setState({
      inputValue: ''
    })
  }

  setError = (): void => {
    const { NOT_EMPTY } = DICTIONARY;

    this.setState({
      error: NOT_EMPTY
    })
  }

  clickBubble = (id: string) => (): void => {
    const { addBubble } = this.props;
    const { inputValue } = this.state;

    if(!!inputValue) {
      addBubble({ parentId: id, name: inputValue });

      this.clearInput()
    } else {
      this.setError()
    } 
  }

  render(): ReactElement {
    const { inputValue, error } = this.state;
    const { bubbles } = this.props;
    return (
      <BubblesScreenView
        inputValue={inputValue}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        bubbles={bubbles}
        error={error}
        clickBubble={this.clickBubble}
      />
    );
  }
};