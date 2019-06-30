import { chatRooms, chatRoom, users, user } from './query';
import { createMessage, createUser, createChatRoom, joinChatRoom } from './mutations';
import { messageCreated, chatRoomCreated } from './subscription';

export const resolvers = {
  Query: {
    chatRooms,
    chatRoom,
    users,
    user
  },
  Mutation: {
    createMessage,
    createUser,
    createChatRoom,
    joinChatRoom
  },
  Subscription: {
    messageCreated,
    chatRoomCreated,
  }
};
