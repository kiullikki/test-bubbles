import { put, all, takeEvery } from 'redux-saga/effects';
import { ACTIONS_TYPES } from '../types';
import { SagaIterator } from 'redux-saga';

const { GET_INITIAL, GET_INITIAL_SUCCESS, GET_INITIAL_FAIL } = ACTIONS_TYPES;

function* initialSaga(): SagaIterator {
  try {
    yield put({ type: GET_INITIAL_SUCCESS });
  } catch (error) {
    yield put({ type: GET_INITIAL_FAIL, payload: 'error' });
  }
}

export function* gitMappingSaga(): SagaIterator {
  yield all([
    takeEvery( GET_INITIAL, initialSaga )
  ]);
}
