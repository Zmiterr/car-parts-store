import {
  AuthActionsTypes,
  SetAuthInterface,
  SetErrorInterface,
  SetLoadingInterface,
  SetRoleInterface,
  SetTokenInterface,
  SetUserInterface,
} from './types';
import { UserInterface } from '../../../models/UserInterface';

export interface AuthState {
  isAuth: boolean;
  user: UserInterface;
  token: string;
  role: string;
  isLoading: boolean;
  error: string;
}

type AuthAction =
  | SetAuthInterface
  | SetErrorInterface
  | SetUserInterface
  | SetLoadingInterface
  | SetTokenInterface
  | SetRoleInterface;

const initialState: AuthState = {
  isAuth: false,
  user: {} as UserInterface,
  token: '',
  role: '',
  isLoading: false,
  error: '',
};

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
    case AuthActionsTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case AuthActionsTypes.SET_ROLE:
      return { ...state, role: action.payload };
    default:
      return state;
  }
};
