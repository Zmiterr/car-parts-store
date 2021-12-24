import { UserInterface } from '../../../models/UserInterface';

export enum AuthActionsTypes {
  SET_AUTH = 'SET_AUTH',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_USER = 'SET_USER',
  SET_TOKEN = 'SET_TOKEN',
  SET_ROLE = 'SET_ROLE',
}

export interface SetAuthInterface {
  type: AuthActionsTypes.SET_AUTH;
  payload: boolean;
}

export interface SetLoadingInterface {
  type: AuthActionsTypes.SET_LOADING;
  payload: boolean;
}

export interface SetUserInterface {
  type: AuthActionsTypes.SET_USER;
  payload: UserInterface;
}

export interface SetErrorInterface {
  type: AuthActionsTypes.SET_ERROR;
  payload: string;
}

export interface SetTokenInterface {
  type: AuthActionsTypes.SET_TOKEN;
  payload: string;
}

export interface SetRoleInterface {
  type: AuthActionsTypes.SET_ROLE;
  payload: string;
}
