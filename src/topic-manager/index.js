/**
 * singleton
 */
let instance = null;

export class TopicManager {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this._topics = {
      newChatRoom: 'NEW_CHAT_ROOM',
      newChat: {
        /** newChat{value}: NEW_CHAT_{value} */
      }
    };
  }

  getTopicChatRoom() {
    return this._topics.newChatRoom;
  }

  getTopicNewChat(topicKey) {
    const selectedTopic = this._topics.newChat[`newChat${topicKey}`];
    if (!selectedTopic) {
      return null;
    }
    return selectedTopic;
  }

  setTopicNewChat(topicKey) {
    const key = `newChat${topicKey}`;
    if (this._topics.newChat.hasOwnProperty(key)) {
      return false;
    }
    this._topics.newChat[key] = `NEW_CHAT_${topicKey}`;
    return true;
  }
}
