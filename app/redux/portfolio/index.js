import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
  loading: false,
  portfolioError: undefined,
  portfolioList: [],
};

function portfolioReducer(state = initialState, action) {
  const {type} = action;

  switch (type) {
    case actionTypes.PORTFOLIO_REQUEST:
      return reducer.portfolioRequest(state, action);
    case actionTypes.PORTFOLIO_SUCCESS:
      return reducer.portfolioSuccess(state, action);
    case actionTypes.PORTFOLIO_FAILED:
      return reducer.portfolioFail(state, action);

    default:
      return state;
  }
}

export default portfolioReducer;
