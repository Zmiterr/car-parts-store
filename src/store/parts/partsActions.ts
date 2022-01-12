import { Dispatch } from 'redux';
import { PartsActionsType } from './types';

import PartsService from '../../api/PartsService';
import { PartsInterface } from '../../models/PartsInterface';

const partsService = new PartsService();
const { getPartsData } = partsService;

const partsLoaded = (data: any) => ({
  type: PartsActionsType.SET_PARTS,
  payload: data,
});

const partRemoved = (partId: number) => ({
  type: PartsActionsType.REMOVE_PART,
  payload: partId,
});

const partsRequested = () => ({
  type: PartsActionsType.FETCH_PARTS_REQUEST,
});

const partsError = () => ({
  type: PartsActionsType.FETCH_PARTS_ERROR,
});

const getParts =
  () =>
  (dispatch: Dispatch): any => {
    try {
      dispatch(partsRequested());
      getPartsData().then((data: PartsInterface[]) => {
        dispatch(partsLoaded(data));
      });
    } catch (error) {
      dispatch(partsError());
    }
  };

const removePart = (dispatch: Dispatch, id: number) => (): any => {
  dispatch(partRemoved(id));
};

export { getParts, removePart };
