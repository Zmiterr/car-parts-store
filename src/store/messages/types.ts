import { Action } from 'redux';

export interface MessageInterface {
  id: number;
  author: string;
  time: number;
  messageText: string;
}

export enum MessagesActionsType {
  SET_MESSAGES = 'messages/SET_MESSAGES',
  GET_CUSTOMER_MESSAGES = 'messages/GET_CUSTOMER_MESSAGES',
  GET_DEALER_MESSAGES = 'messages/GET_DEALER_MESSAGES',
  CREATE_MESSAGE = 'messages/CREATE_MESSAGE',
  UPDATE_MESSAGE = 'messages/UPDATE_MESSAGE',
  FETCH_MESSAGES_REQUEST = 'messages/FETCH_MESSAGES_REQUEST',
  FETCH_MESSAGES_ERROR = 'messages/FETCH_ERROR',
}

export interface GetMessagesActionInterface extends Action<MessagesActionsType> {
  type: MessagesActionsType.SET_MESSAGES;
  payload: MessageInterface;
}

export interface GeCustomerMessagesActionInterface extends Action<MessagesActionsType> {
  type: MessagesActionsType.GET_CUSTOMER_MESSAGES;
  payload: MessageInterface[];
}

export interface GetDealerMessagesActionInterface extends Action<MessagesActionsType> {
  type: MessagesActionsType.GET_DEALER_MESSAGES;
  payload: MessageInterface[];
}

export interface CreateMessagesActionInterface extends Action<MessagesActionsType> {
  type: MessagesActionsType.CREATE_MESSAGE;
  payload: MessageInterface;
}

export interface UpdateMessagesActionInterface extends Action<MessagesActionsType> {
  type: MessagesActionsType.UPDATE_MESSAGE;
  payload: MessageInterface;
}

export interface FetchMessageRequestActionInterface extends Action<MessagesActionsType> {
  type: MessagesActionsType.FETCH_MESSAGES_REQUEST;
}

export interface FetchMessageErrorActionInterface extends Action<MessagesActionsType> {
  type: MessagesActionsType.FETCH_MESSAGES_ERROR;
}

export type MessagesActions =
  | GetMessagesActionInterface
  | GeCustomerMessagesActionInterface
  | GetDealerMessagesActionInterface
  | CreateMessagesActionInterface
  | UpdateMessagesActionInterface
  | FetchMessageRequestActionInterface
  | FetchMessageErrorActionInterface;
