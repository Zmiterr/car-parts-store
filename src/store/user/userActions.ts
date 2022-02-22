import { Dispatch } from 'redux';
import { GetUserActionInterface, UserActionsType, UserProfileDataInterface } from './types';
import UserService from '../../api/UserService';

const userLoaded = (data: UserProfileDataInterface): GetUserActionInterface => ({
  type: UserActionsType.GET_USER,
  payload: data,
});

const userError = () => ({
  type: UserActionsType.FETCH_USER_ERROR,
});

const getUser =
  (id: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await UserService.getUserById(id);
    if (data) {
      dispatch(userLoaded(data[0]));
    } else {
      dispatch(userError());
    }
  };

const updateUser =
  (id: number, body: UserProfileDataInterface) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await UserService.updateUser(id, body);
    if (data) {
      // TODO find type for action
      dispatch<any>(getUser(id));
    } else {
      dispatch(userError());
    }
  };

export { getUser, updateUser, userLoaded };
