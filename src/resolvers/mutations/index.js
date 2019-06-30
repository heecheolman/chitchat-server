import { Chat } from '../db';

const createMessage = ({ chatroomId, userId, content }) => {
  const targetRoom = Chat.chatrooms.find((chatroom) => chatroom.id === chatroomId);
  const nextMessageId = targetRoom.messages.length; // 다음 메세지 고유 id

  /** message */
  const newMessage = {
    id: nextMessageId,
    content,
    createdBy: {
      id: userId,
    },
    createdAt: new Date()
  };

  targetRoom.messages.push(message);
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


const createChatroom = (_, { userId, title }) => {
  const chatroom = {
    id: Chat.chatrooms.length,
    title,
    users: [
      { id: userId, userName: 'admin' },
    ],
    messages: []
  };

  Chat.chatrooms.push(chatroom);
  return chatroom;
};

const joinChatroom = (_, { chatroomId, userId }) => {
  const targetChatroom = Chat.chatrooms.find((chatroom) => chatroom.id === chatroomId);
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

  Chat.chatrooms = [
    ...Chat.chatrooms.filter((chatroom) => chatroom.id !== chatroomId),
    joinedChatroom
  ];

  return joinedChatroom;
};

export {
  createMessage,
  createUser,
  createChatroom,
  joinChatroom
}
