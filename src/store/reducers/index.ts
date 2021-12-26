import { combineReducers } from 'redux';
import { store } from '../index';
import { authReducer } from './auth/authReducer';
import lotsReducer from './lots/lotsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  lots: lotsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
