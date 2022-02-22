import { UserActions, UserActionsType, UserProfileDataInterface } from './types';

export interface UserStateInterface {
  user: UserProfileDataInterface;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserStateInterface = {
  user: {} as UserProfileDataInterface,
  isLoading: false,
  isError: false,
};

const userReducer = (state = initialState, action: UserActions): UserStateInterface => {
  switch (action.type) {
    case UserActionsType.GET_USER:
      return { ...state, user: action.payload, isLoading: false };

    case UserActionsType.FETCH_USER_REQUEST:
      return { ...state, isLoading: true };

    case UserActionsType.FETCH_USER_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export default userReducer;
