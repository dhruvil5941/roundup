import * as actionTypes from './actionTypes';

export const portfolioRequest = () => {
  return {
    type: actionTypes.PORTFOLIO_REQUEST,
  };
};

export const portfolioSuccess = portfolioList => {
  return {
    type: actionTypes.PORTFOLIO_SUCCESS,
    portfolioList,
  };
};

export const portfolioFail = portfolioError => {
  return {
    type: actionTypes.PORTFOLIO_FAILED,
    portfolioError,
  };
};
