import { TopicManager } from '../../topic-manager';
const topicManager = new TopicManager();

export const messageCreated = {
  subscribe: (root, { chatRoomId = null }, { pubsub }) => {
    if (chatRoomId === null) {
      return;
    }
    topicManager.setTopicNewChat(chatRoomId);
    return pubsub.asyncIterator(topicManager.getTopicNewChat(chatRoomId));
  }
};

export const chatRoomCreated = {
  subscribe: (root, args, { pubsub }) => pubsub.asyncIterator(topicManager.getTopicChatRoom())
};

export const chatRoomInfo = {
  subscribe: (root, { chatRoomId = null }, { pubsub }) => {
    if (chatRoomId === null) {
      return;
    }
    topicManager.setTopicNewChat(chatRoomId);
    return pubsub.asyncIterator(topicManager.getTopicNewChat(chatRoomId));
  },
};
