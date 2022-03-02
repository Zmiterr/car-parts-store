import { Dispatch } from 'redux';
import { GetUserActionInterface, UserActionsType, UserProfileDataInterface } from './types';
import UserService from '../../api/UserService';
import { SubmitCoordinatesInterface } from '../../pages/Profile/StoreLocation/StoreLocation';
import { enqueueSnackbar } from '../notifications/actions';

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
      console.log(data);
      // TODO find type for action
      // TODO fix response error
      dispatch<any>(getUser(id));
      dispatch(
        enqueueSnackbar({
          message: 'Saved',
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success',
          },
        }),
      );
    } else {
      dispatch(userError());
    }
  };

const updateUserLocation =
  (id: number, body: SubmitCoordinatesInterface) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await UserService.updateUserLocation(id, body);
    if (data) {
      dispatch(
        enqueueSnackbar({
          message: data,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success',
          },
        }),
      );
    } else {
      // TODO success message
      dispatch(userError());
    }
  };

export { getUser, updateUser, userLoaded, updateUserLocation };
