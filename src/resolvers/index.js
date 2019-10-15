import { chatRooms, chatRoom, users, user, messages } from './query';
import { createMessage, createUser, createChatRoom, joinChatRoom } from './mutations';
import { messageCreated, chatRoomCreated, chatRoomInfo } from './subscription';

export const resolvers = {
  Query: {
    chatRooms,
    chatRoom,
    users,
    user,
    messages
  },
  Mutation: {
    createMessage,
    createUser,
    createChatRoom,
    joinChatRoom,
    exitChatRoom,
  },
  Subscription: {
    chatRoomInfo,
    messageCreated,
    chatRoomCreated,
  }
};
