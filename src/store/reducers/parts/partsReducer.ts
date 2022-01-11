import { PartsActionsType, PartsActions } from './types';

const initialState: any = {
  parts: [],
  isLoading: false,
  isError: false,
};

const partsReducer = (state = initialState, action: PartsActions): any => {
  switch (action.type) {
    case PartsActionsType.SET_PARTS:
      return { ...state, parts: action.payload, isLoading: false, isError: false };

    case PartsActionsType.REMOVE_PART:
      return {
        ...state,
        parts: state.parts.filter((part: any) => part.id !== action.payload),
        isLoading: false,
        isError: false,
      };

    case PartsActionsType.FETCH_PARTS_REQUEST:
      return { ...state, isLoading: true };

    case PartsActionsType.FETCH_PARTS_ERROR:
      return { ...state, parts: [], isLoading: false, isError: true };

    default:
      return state;
  }
};

export default partsReducer;
