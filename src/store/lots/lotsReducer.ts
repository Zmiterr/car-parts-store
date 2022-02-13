import { LotsActionsType, LotsActions, LotInterface } from './types';

export interface LotsStateInterface {
  lots: LotInterface[];
  lotsToCompare: number[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: LotsStateInterface = {
  lots: [],
  lotsToCompare: [],
  isLoading: false,
  isError: false,
};

const lotsReducer = (state = initialState, action: LotsActions): LotsStateInterface => {
  switch (action.type) {
    case LotsActionsType.GET_LOTS:
      return { ...state, lots: action.payload, isLoading: false };
    case LotsActionsType.ADD_COMPARE_LOT:
      return { ...state, lotsToCompare: [...state.lotsToCompare, action.payload] };
    case LotsActionsType.REMOVE_COMPARE_LOT:
      return {
        ...state,
        lotsToCompare: state.lotsToCompare.filter((lotId) => lotId !== action.payload),
      };

    // case LotsActionsType.REMOVE_LOT:
    //   return {
    //     ...state,
    //     lots: state.lots.filter((lot) => lot.id !== action.payload),
    //     isLoading: false,
    //   };

    // case LotsActionsType.CREATE_LOT:
    //   return {
    //     ...state,
    //     lots: state.lots.push(action.payload),
    //     isLoading: false,
    //   };

    //
    // case LotsActionsType.UPDATE_LOT:
    //   return {
    //     ...state,
    //
    //     lots: state.lots, // state.lots.find((lot: any) => lot.id === action.payload.id),
    //     isLoading: false,
    //   };

    case LotsActionsType.FETCH_LOTS_REQUEST:
      return { ...state, isLoading: true };

    case LotsActionsType.FETCH_LOTS_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export default lotsReducer;
