import { Chat } from '../db';
import { pubsub } from '../../index';
import { TopicManager } from '../../topic-manager';

const topicManager = new TopicManager();

const createMessage = (_, { chatRoomId, userId, content }) => {
  const targetRoom = Chat.chatRooms.find((chatRoom) => chatRoom.id === chatRoomId);
  const nextMessageId = targetRoom.messages.length; // 다음 메세지 고유 id

  // 작성한 유저 찾기
  const createdUser = Chat.users.find(user => user.id === userId);

  /** message */
  const newMessage = {
    id: nextMessageId,
    content,
    createdBy: {
      id: userId,
      userName: createdUser.userName
    },
    createdAt: new Date()
  };

  targetRoom.messages.push(newMessage);

  pubsub.publish(topicManager.getTopicNewChat(chatRoomId), {
    chatRoomInfo: targetRoom
  });

  return newMessage;
};


const createUser = (_, { userName }) => {
  const newUser = {
    id: Chat.users.length,
    userName
  };
  Chat.users.push(newUser);
  return newUser;
};


const createChatRoom = (_, { userId, title, description }) => {
  const chatRoom = {
    id: Chat.chatRooms.length,
    title,
    description,
    users: [],
    messages: []
  };
  Chat.chatRooms.push(chatRoom);
  pubsub.publish(topicManager.getTopicChatRoom(), {
    chatRoomCreated: chatRoom
  });
  return chatRoom;
};

const joinChatRoom = (_, { chatRoomId, userId }) => {
  const targetChatRoom = Chat.chatRooms.find((chatRoom) => chatRoom.id === chatRoomId);
  const targetUser = Chat.users.find((user) => user.id === userId);
  const joinedChatRoom = {
    ...targetChatRoom,
    users: [
      ...targetChatRoom.users,
      targetUser,
    ],
    messages: [
      ...targetChatRoom.messages
    ]
  };

  Chat.chatRooms = [
    ...Chat.chatRooms.filter((chatRoom) => chatRoom.id !== chatRoomId),
    joinedChatRoom
  ];

  pubsub.publish(topicManager.getTopicNewChat(chatRoomId), {
    chatRoomInfo: joinedChatRoom,
  });
  console.log(joinedChatRoom);

  return joinedChatRoom;
};

const exitChatRoom = (_, { chatRoomId, userId }) => {
  const targetChatRoom = Chat.chatRooms.find((chatRoom) => chatRoom.id === chatRoomId);
  const targetUser = Chat.users.find((user) => user.id === userId);
  const exitChatRoom = {

  }
};

export {
  createMessage,
  createUser,
  createChatRoom,
  joinChatRoom
}
