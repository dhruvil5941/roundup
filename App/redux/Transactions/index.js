import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
  loading: false,
  transactionDataError: undefined,
  transactionData: [],
};

function transactionReducer(state = initialState, action) {
  const {type} = action;

  switch (type) {
    case actionTypes.TRANSACTION_DATA_REQUEST:
      return reducer.transactionDataRequest(state, action);
    case actionTypes.TRANSACTION_DATA_SUCCESS:
      return reducer.transactionDataSuccess(state, action);
    case actionTypes.TRANSACTION_DATA_FAILED:
      return reducer.transactionDataFail(state, action);

    default:
      return state;
  }
}

export default transactionReducer;
