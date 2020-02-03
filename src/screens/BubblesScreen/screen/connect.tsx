import { connect } from 'react-redux';
import { topLevelBubblesSelector, IStore, addBubbleAction, addTopLevelBubbleAction } from 'store';
import { BubblesScreenController, IConnectStor } from './controller';

const mapState = (state: IStore): IConnectStor => ({
  bubbles: topLevelBubblesSelector(state)
});

const mapDispatch = {
  addBubble: addBubbleAction,
  addTopLevelBubble: addTopLevelBubbleAction
}

export const BubblesScreenConnect = connect(mapState, mapDispatch)(BubblesScreenController);
