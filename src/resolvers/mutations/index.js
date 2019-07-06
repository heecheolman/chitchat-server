import { Chat } from '../db';
import { pubsub } from '../../index';
import { NEW_CHAT, NEW_CHAT_ROOM } from '../subscription';

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

  pubsub.publish(NEW_CHAT, {
    messageCreated: newMessage
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


const createChatRoom = (_, { userId, title }) => {
  const chatRoom = {
    id: Chat.chatRooms.length,
    title,
    users: [
      { id: userId, userName: 'admin' },
    ],
    messages: []
  };
  Chat.chatRooms.push(chatRoom);
  console.log('createChatRoom :: ');
  pubsub.publish(NEW_CHAT_ROOM, {
    chatRoomCreated: chatRoom
  });
  return chatRoom;
};

const joinChatRoom = (_, { chatRoomId, userId }) => {
  const targetChatroom = Chat.chatRooms.find((chatRoom) => chatRoom.id === chatRoomId);
  const joinedChatroom = {
    ...targetChatroom,
    users: [
      ...targetChatroom.users,
      { id: userId, userName: 'you' },
    ],
    messages: [
      ...targetChatroom.messages
    ]
  };

  Chat.chatRooms = [
    ...Chat.chatRooms.filter((chatRoom) => chatRoom.id !== chatRoomId),
    joinedChatroom
  ];

  return joinedChatroom;
};

export {
  createMessage,
  createUser,
  createChatRoom,
  joinChatRoom
}
