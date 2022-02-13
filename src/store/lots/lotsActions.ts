import { Dispatch } from 'redux';
import {
  AddLotToCartInterface,
  AddLotToCompareInterface,
  LotInterface,
  LotsActionsType,
  RemoveLotFromCartInterface,
  RemoveLotFromCompareInterface,
} from './types';
import { lotsService } from '../../api/LotsService';
import { SubmitBodyInterface } from '../../pages/MyLots/MyLots';
import { sortArrayAscend } from '../../shared/utils/sortArrayAscend';

const lotsLoaded = (data: LotInterface[]) => ({
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
      data.sort((a, b) => sortArrayAscend(a.category, b.category));
      dispatch(lotsLoaded(data));
    } else {
      dispatch(lotsError());
    }
  };

const removeLot =
  (id: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { status } = await lotsService.deleteLot(id);
    if (status === 200) {
      dispatch<any>(getLots());
    } else {
      dispatch(lotsError());
    }
  };

const updateLot =
  (id: number, body: LotInterface) =>
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
  (payload: SubmitBodyInterface) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await lotsService.createLot(payload);
    if (data) {
      dispatch<any>(getLots());
    } else {
      dispatch(lotsError());
    }
  };

const addLotToCompare = (data: number): AddLotToCompareInterface => ({
  type: LotsActionsType.ADD_COMPARE_LOT,
  payload: data,
});

const removeLotFromCompare = (data: number): RemoveLotFromCompareInterface => ({
  type: LotsActionsType.REMOVE_COMPARE_LOT,
  payload: data,
});

const addLotToCart = (data: number): AddLotToCartInterface => ({
  type: LotsActionsType.ADD_LOT_TO_CART,
  payload: data,
});

const removeLotFromCart = (data: number): RemoveLotFromCartInterface => ({
  type: LotsActionsType.REMOVE_LOT_FROM_CART,
  payload: data,
});

export {
  getLots,
  removeLot,
  updateLot,
  createLot,
  addLotToCompare,
  removeLotFromCompare,
  addLotToCart,
  removeLotFromCart,
};
