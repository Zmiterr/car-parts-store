import { Dispatch } from 'redux';
import { MessageInterface, MessagesActionsType } from './types';
import { messagesService } from '../../api/MessagesService';

const messagesLoaded = (data: MessageInterface[]) => ({
  type: MessagesActionsType.SET_MESSAGES,
  payload: data,
});

const messagesError = () => ({
  type: MessagesActionsType.FETCH_MESSAGES_ERROR,
});

const getMessages =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await messagesService.getMessagesData();
    if (data) {
      dispatch(messagesLoaded(data));
    } else {
      dispatch(messagesError());
    }
  };

const removeMessage =
  (id: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { status } = await messagesService.deleteMessage(id);
    if (status === 200) {
      dispatch<any>(getMessages());
    } else {
      dispatch(messagesError());
    }
  };

const updateMessage =
  (id: number, body: MessageInterface) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await messagesService.updateMessage(id, body);
    if (data) {
      // TODO find type for action
      dispatch<any>(getMessages());
    } else {
      dispatch(messagesError());
    }
  };

const createMessage =
  (payload: any) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await messagesService.createMessage(payload);
    if (data) {
      dispatch<any>(getMessages());
    } else {
      dispatch(messagesError());
    }
  };

export { getMessages, removeMessage, updateMessage, createMessage };
