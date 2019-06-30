import { chatrooms, chatroom, users, user } from './query';
import { createMessage, createUser, createChatroom, joinChatroom } from './mutations';
import { messageCreated } from './subscription';

export const resolvers = {
  Query: {
    chatrooms,
    chatroom,
    users,
    user
  },
  Mutation: {
    createMessage,
    createUser,
    createChatroom,
    joinChatroom
  },
  Subscription: {
    messageCreated,
  }
};
