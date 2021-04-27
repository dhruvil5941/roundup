export const portfolioRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const portfolioSuccess = (state, action) => {
  const {portfolioList} = action;
  return {
    ...state,
    loading: false,
    portfolioList,
  };
};

export const portfolioFail = (state, action) => {
  const {portfolioError} = action;
  return {
    ...state,
    loading: false,
    portfolioError,
  };
};
