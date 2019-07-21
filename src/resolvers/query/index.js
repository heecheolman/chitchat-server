import { Chat } from '../db';

/** 채팅방들 */
const chatRooms = () => Chat.chatRooms;

/** 채팅방 */
const chatRoom = (obj, { id }, context) => Chat.chatRooms.find((chatRoom) => chatRoom.id === id);

/** 유저들 */
const users = () => Chat.users;

/** 유저 */
const user = (obj, { id }, context) => Chat.users.find((user) => user.id === id);

const messages = (obj, { chatRoomId }, context) => {
  const foundChatRoom = Chat.chatRooms.find(chatRoom => chatRoom.id === chatRoomId);
  if (!foundChatRoom) {
    return [];
  }
  return foundChatRoom.messages;
};

export {
  chatRooms,
  chatRoom,
  users,
  user,
  messages
};
