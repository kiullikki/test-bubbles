import { all } from 'redux-saga/effects';
import { gitMappingSaga } from './gitMapping';

export function* rootSaga(): Generator {
  yield all([gitMappingSaga()]);
}
