export const questionListRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const questionListSuccess = (state, action) => {
  const {questionList} = action;
  return {
    ...state,
    loading: false,
    questionList,
  };
};

export const questionListFail = (state, action) => {
  const {questionListError} = action;
  return {
    ...state,
    loading: false,
    questionListError,
  };
};
