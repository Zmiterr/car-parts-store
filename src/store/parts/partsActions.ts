import { Dispatch } from 'redux';
import { PartsActionsType } from './types';
import { partsService } from '../../api/PartsService';

const { getPartsData } = partsService;

const partsLoaded = (data: any) => ({
  type: PartsActionsType.SET_PARTS,
  payload: data,
});

const partsRequested = () => ({
  type: PartsActionsType.FETCH_PARTS_REQUEST,
});

const partsError = () => ({
  type: PartsActionsType.FETCH_PARTS_ERROR,
});

const getParts =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(partsRequested());
    const { data } = await getPartsData();
    if (data) {
      dispatch(partsLoaded(data));
    } else {
      dispatch(partsError());
    }
  };

export { getParts };
