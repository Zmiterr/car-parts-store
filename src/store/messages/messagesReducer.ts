import { MessagesActionsType, MessagesActions, MessageInterface } from './types';

const mockMessages = [
  {
    id: 1,
    author: 'Me',
    time: 1644783821596,
    messageText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget\n' +
      '                dolor.',
  },

  {
    id: 2,
    author: 'Ivan',
    time: 1644783835586,
    messageText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget\n' +
      '                dolor.',
  },
  {
    id: 3,
    author: 'Me',
    time: 1644783839586,
    messageText: 'Done',
  },
];

export interface MessagesStateInterface {
  messages: MessageInterface[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: MessagesStateInterface = {
  messages: [...mockMessages],
  isLoading: false,
  isError: false,
};

const messagesReducer = (state = initialState, action: MessagesActions): MessagesStateInterface => {
  switch (action.type) {
    case MessagesActionsType.SET_MESSAGES:
      return <MessagesStateInterface>{
        ...state,
        messages: [...state.messages, action.payload],
        isLoading: false,
      };
    case MessagesActionsType.FETCH_MESSAGES_REQUEST:
      return { ...state, isLoading: true };
    case MessagesActionsType.FETCH_MESSAGES_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default messagesReducer;
