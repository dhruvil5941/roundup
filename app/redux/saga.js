import {all} from 'redux-saga/effects';
import {questionListSaga} from './userfinancesquestion/sagas';
import {portfolioSaga} from './portfolio/sagas';
import {homeSaga} from './home/sagas';
import {transactionSaga} from './transactions/sagas';

export function* rootSaga() {
  return yield all([
    questionListSaga(),
    portfolioSaga(),
    homeSaga(),
    transactionSaga(),
  ]);
}
