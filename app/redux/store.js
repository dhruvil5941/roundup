import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';
import {createLogger} from 'redux-logger';
import questionListReducer from './userfinancesquestion';
import portfolioReducer from './portfolio';
import homeReducer from './home';
import transactionReducer from './transactions';

let initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, createLogger()];

const appReducer = combineReducers({
  questionListReducer,
  portfolioReducer,
  homeReducer,
  transactionReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);
