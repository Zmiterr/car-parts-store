import {
  AuthActionsTypes,
  SetAuthInterface,
  SetErrorInterface,
  SetLoadingInterface,
  SetUserInterface,
} from './types';
import { UserInterface } from '../../../models/UserInterface';

interface AuthState {
  isAuth: boolean;
  user: UserInterface;
  isLoading: boolean;
  error: string;
}

type AuthAction = SetAuthInterface | SetErrorInterface | SetUserInterface | SetLoadingInterface;

const initialState: AuthState = {
  isAuth: false,
  user: {} as UserInterface,
  isLoading: false,
  error: '',
};

// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionsTypes.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionsTypes.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionsTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionsTypes.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
