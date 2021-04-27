import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {portfolioListData} from '../../utility/api';

function* portfolioRequest() {
  try {
    const responseData = yield call(portfolioListData);
    if (responseData) {
      yield put(actions.portfolioSuccess(responseData));
    }
  } catch (e) {
    yield put(actions.portfolioFail(e));
  }
}

export function* portfolioSaga() {
  return yield all([
    yield takeLatest(actionTypes.PORTFOLIO_REQUEST, portfolioRequest),
  ]);
}
