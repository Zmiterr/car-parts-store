import { Action } from 'redux';

export interface LotInterface {
  id: number;
  partId: number;
  category: string;
  name: string;
  description: string;
  models: string[];
  condition: string;
  price: number;
  photoUrl: string;
}

export enum LotsActionsType {
  GET_LOTS = 'lots/GET_LOTS',
  CREATE_LOT = 'lots/CREATE_LOT',
  UPDATE_LOT = 'lots/UPDATE_LOT',
  REMOVE_LOT = 'lots/REMOVE_LOT',
  ADD_COMPARE_LOT = 'lots/ADD_COMPARE_LOT',
  REMOVE_COMPARE_LOT = 'lots/REMOVE_COMPARE_LOT',
  FETCH_LOTS_REQUEST = 'lots/FETCH_LOTS_REQUEST',
  FETCH_LOTS_ERROR = 'lots/FETCH_ERROR',
}

export interface GetLotsActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.GET_LOTS;
  payload: LotInterface[];
}

export interface CreateLotsActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.CREATE_LOT;
  payload: LotInterface;
}

export interface UpdateLotsActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.UPDATE_LOT;
  payload: LotInterface;
}

// export interface RemoveLotActionInterface extends Action<LotsActionsType> {
//   type: LotsActionsType.REMOVE_LOT;
//   payload: any;
// }

export interface AddLotToCompareInterface extends Action<LotsActionsType> {
  type: LotsActionsType.ADD_COMPARE_LOT;
  payload: LotInterface;
}

export interface RemoveLotFromCompareInterface extends Action<LotsActionsType> {
  type: LotsActionsType.REMOVE_COMPARE_LOT;
  payload: LotInterface;
}

export interface FetchLotRequestActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.FETCH_LOTS_REQUEST;
}

export interface FetchLotErrorActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.FETCH_LOTS_ERROR;
}

export type LotsActions =
  | GetLotsActionInterface
  | CreateLotsActionInterface
  | UpdateLotsActionInterface
  | AddLotToCompareInterface
  | RemoveLotFromCompareInterface
  | FetchLotRequestActionInterface
  | FetchLotErrorActionInterface;
