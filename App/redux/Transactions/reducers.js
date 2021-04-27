export const transactionDataRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const transactionDataSuccess = (state, action) => {
  const {transactionData} = action;
  return {
    ...state,
    loading: false,
    transactionData,
  };
};

export const transactionDataFail = (state, action) => {
  const {transactionDataError} = action;
  return {
    ...state,
    loading: false,
    transactionDataError,
  };
};
