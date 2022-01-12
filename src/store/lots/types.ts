import { Action } from 'redux';

export enum LotsActionsType {
  GET_LOTS = 'lots/GET_LOTS',
  REMOVE_LOT = 'lots/REMOVE_LOT',
  FETCH_LOTS_REQUEST = 'lots/FETCH_LOTS_REQUEST',
  FETCH_LOTS_ERROR = 'lots/FETCH_ERROR',
}

export interface GetLotsActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.GET_LOTS;
  payload: any;
}

export interface RemoveLotActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.REMOVE_LOT;
  payload: any;
}

export interface FetchLotRequestActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.FETCH_LOTS_REQUEST;
}

export interface FetchLotErrorActionInterface extends Action<LotsActionsType> {
  type: LotsActionsType.FETCH_LOTS_ERROR;
}

export type LotsActions =
  | GetLotsActionInterface
  | RemoveLotActionInterface
  | FetchLotRequestActionInterface
  | FetchLotErrorActionInterface;
