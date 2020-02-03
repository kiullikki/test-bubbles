import { connect } from 'react-redux';
import { IStore, bubbleItemSelector } from 'store';
import { BubbleView, IConnectProps, IOwnProps } from './view';

const mapState = (store: IStore, { id }: IOwnProps): IConnectProps => ({
  bubble: bubbleItemSelector(id)(store)
});

export const BubbleConnect = connect(mapState)(BubbleView);
