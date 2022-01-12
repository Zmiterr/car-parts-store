import { combineReducers } from 'redux';
import { store } from '../index';
import { authReducer } from '../auth/authReducer';
import lotsReducer from '../lots/lotsReducer';
import partsReducer from '../parts/partsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  parts: partsReducer,
  lots: lotsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
