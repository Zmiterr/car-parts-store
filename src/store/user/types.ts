import { Action } from 'redux';

export interface UserProfileDataInterface {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  location: string;
}

export enum UserActionsType {
  GET_USER = 'user/GET_USER',
  FETCH_USER_REQUEST = 'user/FETCH_USER_REQUEST',
  FETCH_USER_ERROR = 'user/FETCH_ERROR',
}

export interface GetUserActionInterface extends Action<UserActionsType> {
  type: UserActionsType.GET_USER;
  payload: any;
}

export interface FetchUserRequestActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_REQUEST;
}

export interface FetchUserErrorActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_ERROR;
}

export type UserActions =
  | GetUserActionInterface
  | FetchUserRequestActionInterface
  | FetchUserErrorActionInterface;
