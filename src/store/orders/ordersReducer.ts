import { OrdersActionsType, OrdersActions, OrderInterface } from './types';

export interface OrdersStateInterface {
  orders: OrderInterface[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: OrdersStateInterface = {
  orders: [],
  isLoading: false,
  isError: false,
};

const ordersReducer = (state = initialState, action: OrdersActions): OrdersStateInterface => {
  switch (action.type) {
    case OrdersActionsType.GET_ORDERS:
      return { ...state, orders: action.payload, isLoading: false };
    case OrdersActionsType.FETCH_ORDERS_REQUEST:
      return { ...state, isLoading: true };
    case OrdersActionsType.FETCH_ORDERS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default ordersReducer;
