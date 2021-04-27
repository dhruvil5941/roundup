import {all} from 'redux-saga/effects';
import {questionListSaga} from './userfinancesquestion/sagas';

export function* rootSaga() {
  return yield all([questionListSaga()]);
}
