import * as actionTypes from './actionTypes';

export const transactionDataRequest = () => {
  return {
    type: actionTypes.TRANSACTION_DATA_REQUEST,
  };
};

export const transactionDataSuccess = transactionData => {
  return {
    type: actionTypes.TRANSACTION_DATA_SUCCESS,
    transactionData,
  };
};

export const transactionDataFail = transactionDataError => {
  return {
    type: actionTypes.TRANSACTION_DATA_FAILED,
    transactionDataError,
  };
};
