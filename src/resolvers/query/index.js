import { Chat } from '../db';

/** 채팅방들 */
const chatrooms = () => Chat.chatrooms;

/** 채팅방 */
const chatroom = (id) => Chat.chatrooms.find((chatroom) => chatroom.id === id);

/** 유저들 */
const users = () => Chat.users;

/** 유저 */
const user = (id) => Chat.users.find((user) => user.id === id);

export {
  chatrooms,
  chatroom,
  users,
  user
};
