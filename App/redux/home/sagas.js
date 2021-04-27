import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {homeData} from '../../utility/api';

function* homeDataRequest() {
  try {
    const responseData = yield call(homeData);
    if (responseData) {
      yield put(actions.homeDataSuccess(responseData));
    }
  } catch (e) {
    yield put(actions.homeDataFail(e));
  }
}

export function* homeSaga() {
  return yield all([
    yield takeLatest(actionTypes.HOME_DATA_REQUEST, homeDataRequest),
  ]);
}
