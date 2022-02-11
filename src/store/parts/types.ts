import { Action } from 'redux';

export enum PartsActionsType {
  SET_PARTS = 'part/GET_PARTS',
  REMOVE_PART = 'part/REMOVE_PART',
  FETCH_PARTS_REQUEST = 'part/FETCH_PARTS_REQUEST',
  FETCH_PARTS_ERROR = 'part/FETCH_ERROR',
}

export interface PartInterface {
  id: number;
  name: string;
  description: string;
  models: string[];
  year: number;
  make: string;
  model: string;
  category: string;
}

export interface PartsStateInterface {
  parts: PartInterface[];
  isLoading: boolean;
  isError: boolean;
}

export interface GetPartsActionInterface extends Action<PartsActionsType> {
  type: PartsActionsType.SET_PARTS;
  payload: any;
}

export interface RemovePartActionInterface extends Action<PartsActionsType> {
  type: PartsActionsType.REMOVE_PART;
  payload: any;
}

export interface FetchPartRequestActionInterface extends Action<PartsActionsType> {
  type: PartsActionsType.FETCH_PARTS_REQUEST;
}

export interface FetchPartErrorActionInterface extends Action<PartsActionsType> {
  type: PartsActionsType.FETCH_PARTS_ERROR;
}

export type PartsActions =
  | GetPartsActionInterface
  | RemovePartActionInterface
  | FetchPartRequestActionInterface
  | FetchPartErrorActionInterface;
