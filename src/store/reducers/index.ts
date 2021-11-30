import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-cycle
import { store } from '../index';
import { authReducer } from './auth/authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
