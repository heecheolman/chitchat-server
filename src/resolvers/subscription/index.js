import { TopicManager } from '../../topic-manager';
const topicManager = new TopicManager();

export const messageCreated = {
  subscribe: (root, { chatRoomId = null }, { pubsub }) => {
    console.log('chatRoomId :: ', chatRoomId);
    if (chatRoomId === null) {
      return;
    }
    topicManager.setTopicNewChat(chatRoomId);
    console.log('subscription topicManager', topicManager._topics);
    return pubsub.asyncIterator(topicManager.getTopicNewChat(chatRoomId));
  }
};

export const chatRoomCreated = {
  subscribe: (root, args, { pubsub }) => pubsub.asyncIterator(topicManager.getTopicChatRoom())
};
