import { Dispatch } from 'redux';
import { LotsActionsType } from './types';
import { lotsService } from '../../api/LotsService';

const lotsLoaded = (data: any) => ({
  type: LotsActionsType.GET_LOTS,
  payload: data,
});

const lotRemoved = (lotId: string) => ({
  type: LotsActionsType.REMOVE_LOT,
  payload: lotId,
});

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
      dispatch(lotRemoved(id));
    } else {
      dispatch(lotsError());
    }
  };

export { getLots, removeLot };
