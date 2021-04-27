import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {transactionData} from '../../utility/api';

function* transactionDataRequest() {
  try {
    const responseData = yield call(transactionData);
    if (responseData) {
      yield put(actions.transactionDataSuccess(responseData));
    }
  } catch (e) {
    yield put(actions.transactionDataFail(e));
  }
}

export function* transactionSaga() {
  return yield all([
    yield takeLatest(
      actionTypes.TRANSACTION_DATA_REQUEST,
      transactionDataRequest,
    ),
  ]);
}
