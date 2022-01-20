import { Dispatch } from 'redux';
import { LotInterface, LotsActionsType } from './types';
import { lotsService } from '../../api/LotsService';

const lotsLoaded = (data: any) => ({
  type: LotsActionsType.GET_LOTS,
  payload: data,
});

// const lotCreated = (data: any) => ({
//   type: LotsActionsType.CREATE_LOT,
//   payload: data,
// });
//
// const lotUpdated = (data: any) => ({
//   type: LotsActionsType.UPDATE_LOT,
//   payload: data,
// });
//
// const lotRemoved = (lotId: string) => ({
//   type: LotsActionsType.REMOVE_LOT,
//   payload: lotId,
// });

// const lotsRequested = () => ({
//   type: LotsActionsType.FETCH_LOTS_REQUEST,
// });

const lotsError = () => ({
  type: LotsActionsType.FETCH_LOTS_ERROR,
});

const getLots =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await lotsService.getLotsData();
    if (data) {
      dispatch(lotsLoaded(data));
    } else {
      dispatch(lotsError());
    }
  };

const removeLot =
  (id: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { status } = await lotsService.deleteLot(id);
    if (status === 200) {
      dispatch<any>(getLots());
    } else {
      dispatch(lotsError());
    }
  };

const updateLot =
  (id: string, body: LotInterface) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await lotsService.updateLot(id, body);
    if (data) {
      // TODO find type for action
      dispatch<any>(getLots());
    } else {
      dispatch(lotsError());
    }
  };

const createLot =
  (payload: LotInterface) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await lotsService.createLot(payload);
    if (data) {
      dispatch<any>(getLots());
    } else {
      dispatch(lotsError());
    }
  };

export { getLots, removeLot, updateLot, createLot };
