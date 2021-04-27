export const homeDataRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const homeDataSuccess = (state, action) => {
  const {homeData} = action;
  return {
    ...state,
    loading: false,
    homeData,
  };
};

export const homeDataFail = (state, action) => {
  const {homeDataError} = action;
  return {
    ...state,
    loading: false,
    homeDataError,
  };
};
