import { Dispatch } from 'redux';
import { LotsActionsType } from './types';
import { lotsService } from '../../api/LotsService';

const lotsLoaded = (data: any) => ({
  type: LotsActionsType.GET_LOTS,
  payload: data,
});

const lotRemoved = (lotId: number) => ({
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
  (id: number) =>
  (dispatch: Dispatch): any => {
    dispatch(lotRemoved(id));
  };

export { getLots, removeLot };
