import * as actionTypes from './actionTypes';

export const homeDataRequest = () => {
  return {
    type: actionTypes.HOME_DATA_REQUEST,
  };
};

export const homeDataSuccess = homeData => {
  return {
    type: actionTypes.HOME_DATA_SUCCESS,
    homeData,
  };
};

export const homeDataFail = homeDataError => {
  return {
    type: actionTypes.HOME_DATA_FAILED,
    homeDataError,
  };
};
