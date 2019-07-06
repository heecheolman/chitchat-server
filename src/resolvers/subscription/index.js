export const NEW_CHAT = 'NEW_CHAT';
export const NEW_CHAT_ROOM = 'NEW_CHAT_ROOM';

export const messageCreated = {
  subscribe: (root, args, { pubsub }) => pubsub.asyncIterator(NEW_CHAT)
};

export const chatRoomCreated = {
  subscribe: (root, args, { pubsub }) => pubsub.asyncIterator(NEW_CHAT_ROOM)
};
