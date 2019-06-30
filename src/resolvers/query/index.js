import { Chat } from '../db';

/** 채팅방들 */
const chatRooms = () => Chat.chatRooms;

/** 채팅방 */
const chatRoom = (id) => Chat.chatRooms.find((chatRoom) => chatRoom.id === id);

/** 유저들 */
const users = () => Chat.users;

/** 유저 */
const user = (id) => Chat.users.find((user) => user.id === id);

export {
  chatRooms,
  chatRoom,
  users,
  user
};
