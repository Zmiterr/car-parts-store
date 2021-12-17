import {
  AuthActionsTypes,
  SetAuthInterface,
  SetErrorInterface,
  SetLoadingInterface,
  SetTokenInterface,
  SetUserInterface,
} from './types';

import { AppDispatch } from '../index';

import { UserInterface } from '../../../models/UserInterface';
import AuthService from '../../../api/AuthService';

export const AuthActions = {
  setAuth: (auth: boolean): SetAuthInterface => ({
    type: AuthActionsTypes.SET_AUTH,
    payload: auth,
  }),
  setLoading: (loading: boolean): SetLoadingInterface => ({
    type: AuthActionsTypes.SET_LOADING,
    payload: loading,
  }),
  setUser: (user: UserInterface): SetUserInterface => ({
    type: AuthActionsTypes.SET_USER,
    payload: user,
  }),
  setToken: (token: string): SetTokenInterface => ({
    type: AuthActionsTypes.SET_TOKEN,
    payload: token,
  }),
  setError: (error: string): SetErrorInterface => ({
    type: AuthActionsTypes.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        dispatch(AuthActions.setLoading(true));
        setTimeout(async () => {
          const response = await AuthService.signUp(username, password);
          const authResponseUserData = response.data;
          if (authResponseUserData) {
            localStorage.setItem('username', authResponseUserData.username);
            localStorage.setItem('auth', 'true');
            localStorage.setItem('token', authResponseUserData.token);
            dispatch(AuthActions.setUser(authResponseUserData));
            dispatch(AuthActions.setAuth(true));
            dispatch(AuthActions.setToken(authResponseUserData.token));
          } else {
            dispatch(AuthActions.setError('User is not found'));
          }
        }, 500);
      } catch (e) {
        dispatch(AuthActions.setError(String(e)));
      } finally {
        dispatch(AuthActions.setLoading(false));
      }
    },
  logout:
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(AuthActions.setAuth(false));
        dispatch(AuthActions.setUser({} as UserInterface));
      } catch (e) {
        dispatch(AuthActions.setError(String(e)));
      }
    },
};
