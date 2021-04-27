import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {questionListData} from '../../utility/api';

function* questionListRequest() {
  try {
    const responseData = yield call(questionListData);
    console.log('response question-->', JSON.stringify(responseData));
    if (responseData) {
      yield put(actions.questionListSuccess(responseData));
    }
  } catch (e) {
    yield put(actions.questionListFail(e));
  }
}

export function* questionListSaga() {
  return yield all([
    yield takeLatest(actionTypes.QUESTION_LIST_REQUEST, questionListRequest),
  ]);
}
