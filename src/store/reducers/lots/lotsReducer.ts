import { LotsActionsType, LotsActions } from './types';

const initialState: any = {
  lots: [],
  isLoading: false,
  isError: false,
};

const lotsReducer = (state = initialState, action: LotsActions): any => {
  switch (action.type) {
    case LotsActionsType.GET_LOTS:
      return { ...state, lots: action.payload, isLoading: false, isError: false };

    case LotsActionsType.REMOVE_LOT:
      return {
        ...state,
        lots: state.lots.filter((lot: any) => lot.id !== action.payload),
        isLoading: false,
        isError: false,
      };

    case LotsActionsType.FETCH_LOTS_REQUEST:
      return { ...state, lots: [], isLoading: true, isError: false };

    case LotsActionsType.FETCH_LOTS_ERROR:
      return { ...state, lots: [], isLoading: false, isError: true };

    default:
      return state;
  }
};

export default lotsReducer;
