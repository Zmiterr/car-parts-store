import { Dispatch } from 'redux';
import { LotsActionsType } from './types';
import ApiService from './lotsMock';

const mockDataStoreService = new ApiService();
const { getLotsData } = mockDataStoreService;

const lotsLoaded = (data: any) => ({
  type: LotsActionsType.GET_LOTS,
  payload: data,
});

const lotRemoved = (lotId: number) => ({
  type: LotsActionsType.REMOVE_LOT,
  payload: lotId,
});

const lotsRequested = () => ({
  type: LotsActionsType.FETCH_LOTS_REQUEST,
});

const lotsError = () => ({
  type: LotsActionsType.FETCH_LOTS_ERROR,
});

const getLots = (dispatch: Dispatch) => (): any => {
  try {
    dispatch(lotsRequested());
    getLotsData().then((data: any) => {
      dispatch(lotsLoaded(data));
    });
  } catch (error) {
    dispatch(lotsError());
  }
};

const removeLot = (dispatch: Dispatch, id: number) => (): any => {
  dispatch(lotRemoved(id));
};

export { getLots, removeLot };
