import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
  loading: false,
  homeDataError: undefined,
  homeData: '',
};

function homeReducer(state = initialState, action) {
  const {type} = action;

  switch (type) {
    case actionTypes.HOME_DATA_REQUEST:
      return reducer.homeDataRequest(state, action);
    case actionTypes.HOME_DATA_SUCCESS:
      return reducer.homeDataSuccess(state, action);
    case actionTypes.HOME_DATA_FAILED:
      return reducer.homeDataFail(state, action);

    default:
      return state;
  }
}

export default homeReducer;
