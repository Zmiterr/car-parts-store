import { GetMessagesActionInterface, MessageInterface, MessagesActionsType } from './types';

const appendMessage = (data: MessageInterface): GetMessagesActionInterface => ({
  type: MessagesActionsType.SET_MESSAGES,
  payload: data,
});

export { appendMessage };
