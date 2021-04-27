import * as actionTypes from './actionTypes';

export const questionListRequest = () => {
  return {
    type: actionTypes.QUESTION_LIST_REQUEST,
  };
};

export const questionListSuccess = questionList => {
  return {
    type: actionTypes.QUESTION_LIST_SUCCESS,
    questionList,
  };
};

export const questionListFail = questionListError => {
  return {
    type: actionTypes.QUESTION_LIST_FAILED,
    questionListError,
  };
};
