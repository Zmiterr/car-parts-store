import { LotsActionsType, LotsActions } from './types';

const initialState: any = {
  lots: [],
  isLoading: false,
  isError: false,
};

const lotsReducer = (state = initialState, action: LotsActions): any => {
  switch (action.type) {
    case LotsActionsType.GET_LOTS:
      return { ...state, lots: action.payload, isLoading: false };

    case LotsActionsType.REMOVE_LOT:
      return {
        ...state,
        lots: state.lots.filter((lot: any) => lot.id !== action.payload),
        isLoading: false,
      };

    case LotsActionsType.CREATE_LOT:
      return {
        ...state,
        lots: state.lots.push(action.payload),
        isLoading: false,
      };

    case LotsActionsType.UPDATE_LOT:
      return {
        ...state,
        // TODO write update action
        lots: state.lots, // state.lots.find((lot: any) => lot.id === action.payload.id),
        isLoading: false,
      };

    case LotsActionsType.FETCH_LOTS_REQUEST:
      return { ...state, isLoading: true };

    case LotsActionsType.FETCH_LOTS_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export default lotsReducer;
