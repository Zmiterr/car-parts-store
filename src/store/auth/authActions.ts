import {
  AuthActionsTypes,
  SetAuthInterface,
  SetErrorInterface,
  SetLoadingInterface,
  SetRoleInterface,
  SetTokenInterface,
  SetUserInterface,
} from './types';

import { AppDispatch } from '../rootReducer';

import { UserInterface } from '../../models/UserInterface';
import AuthService from '../../api/AuthService';
import UserService from '../../api/UserService';
import { Auth } from '../../shared/constants/localstorage';
import { userLoaded } from '../user/userActions';

export const AuthActions = {
  checkAuth:
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        if (localStorage.getItem('auth')) {
          dispatch(AuthActions.setAuth(true));
          const login = localStorage.getItem('login') || '';
          dispatch(AuthActions.login(login, '1'));
        } else {
          AuthActions.logout();
        }
      } catch (e) {
        dispatch(AuthActions.setError(String(e)));
      }
    },
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
  setRole: (role: string): SetRoleInterface => ({
    type: AuthActionsTypes.SET_ROLE,
    payload: role,
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
        const response = await AuthService.signUp(username, password);
        const authResponseUserData = response.data;
        if (authResponseUserData) {
          localStorage.setItem('login', authResponseUserData.userData[0].login);
          localStorage.setItem('auth', 'true');
          localStorage.setItem('token', authResponseUserData.token);
          dispatch(AuthActions.setUser(authResponseUserData));
          dispatch(AuthActions.setAuth(true));
          dispatch(AuthActions.setToken(authResponseUserData.token));
          dispatch(AuthActions.setRole(authResponseUserData.userData[0].role));
        } else {
          dispatch(AuthActions.setError('User is not found'));
        }
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
        Object.values(Auth).forEach((localStorageAuthKey) => {
          localStorage.removeItem(localStorageAuthKey);
        });

        dispatch(userLoaded([]));
        dispatch(AuthActions.setAuth(false));
        dispatch(AuthActions.setUser({} as UserInterface));
        dispatch(AuthActions.setRole(''));
      } catch (e) {
        dispatch(AuthActions.setError(String(e)));
      }
    },
  createUser:
    (username: string, password: string, role: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        dispatch(AuthActions.setLoading(true));
        setTimeout(async () => {
          const response = await UserService.setUser(username, password, role);
          const authResponseUserData = response.data;
          if (authResponseUserData) {
            localStorage.setItem('username', authResponseUserData.username);
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
};
