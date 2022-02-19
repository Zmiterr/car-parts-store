import { Action } from 'redux';

export interface OrderInterface {
  id: number;
  customerFirstName: string;
  customerLastName: string;
  email: string | null;
  deliveryAddress: string | null;
  phone: string | null;
  dealerFirstName: string;
  dealerLastName: string;
  location: string | null;
}

export enum OrdersActionsType {
  GET_ORDERS = 'orders/GET_ORDERS',
  GET_CUSTOMER_ORDERS = 'orders/GET_CUSTOMER_ORDERS',
  GET_DEALER_ORDERS = 'orders/GET_DEALER_ORDERS',
  CREATE_ORDER = 'orders/CREATE_ORDER',
  UPDATE_ORDER = 'orders/UPDATE_ORDER',
  FETCH_ORDERS_REQUEST = 'orders/FETCH_ORDERS_REQUEST',
  FETCH_ORDERS_ERROR = 'orders/FETCH_ERROR',
}

export interface GetOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.GET_ORDERS;
  payload: OrderInterface[];
}

export interface GeCustomerOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.GET_CUSTOMER_ORDERS;
  payload: OrderInterface[];
}

export interface GetDealerOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.GET_DEALER_ORDERS;
  payload: OrderInterface[];
}

export interface CreateOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.CREATE_ORDER;
  payload: OrderInterface;
}

export interface UpdateOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.UPDATE_ORDER;
  payload: OrderInterface;
}

export interface FetchOrderRequestActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.FETCH_ORDERS_REQUEST;
}

export interface FetchOrderErrorActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.FETCH_ORDERS_ERROR;
}

export type OrdersActions =
  | GetOrdersActionInterface
  | GeCustomerOrdersActionInterface
  | GetDealerOrdersActionInterface
  | CreateOrdersActionInterface
  | UpdateOrdersActionInterface
  | FetchOrderRequestActionInterface
  | FetchOrderErrorActionInterface;
