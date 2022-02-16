import { PartsActionsType, PartsActions, PartsStateInterface, PartInterface } from './types';

const initialState: PartsStateInterface = {
  parts: [],
  isLoading: false,
  isError: false,
};

const partsReducer = (state = initialState, action: PartsActions): PartsStateInterface => {
  switch (action.type) {
    case PartsActionsType.SET_PARTS:
      return { ...state, parts: action.payload, isLoading: false, isError: false };

    case PartsActionsType.REMOVE_PART:
      return {
        ...state,
        parts: state.parts.filter((part: PartInterface) => part.id !== action.payload),
        isLoading: false,
      };
    case PartsActionsType.FETCH_PARTS_REQUEST:
      return { ...state, isLoading: true };
    case PartsActionsType.FETCH_PARTS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default partsReducer;
