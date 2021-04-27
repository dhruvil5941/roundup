import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
  loading: false,
  questionListError: undefined,
  questionList: [],
};

function questionListReducer(state = initialState, action) {
  const {type} = action;

  switch (type) {
    case actionTypes.QUESTION_LIST_REQUEST:
      return reducer.questionListRequest(state, action);
    case actionTypes.QUESTION_LIST_SUCCESS:
      return reducer.questionListSuccess(state, action);
    case actionTypes.QUESTION_LIST_FAILED:
      return reducer.questionListFail(state, action);

    default:
      return state;
  }
}

export default questionListReducer;
