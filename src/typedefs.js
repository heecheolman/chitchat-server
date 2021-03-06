export const typeDefs = `
  type User {
      id: Int!
      userName: String!
  }
  
  type Message {
      id: Int!
      content: String!
      createdBy: User!
      createdAt: String!
  }
  
  type ChatRoom {
      id: Int!
      title: String!
      description: String!
      users: [User]!
      messages: [Message]!
  }
  
  type Query {
      chatRooms: [ChatRoom]!
      chatRoom(id: Int!): ChatRoom!
      messages(chatRoomId: Int!): [Message]
      users: [User]
      user(id: Int!): User
  }
  
  type Mutation {
      createMessage(chatRoomId: Int!, userId: Int!, content: String!): Message!
      createUser(userName: String!): User!
      createChatRoom(userId: Int!, title: String!, description: String!): ChatRoom!
      joinChatRoom(chatRoomId: Int!, userId: Int!): ChatRoom!
  }
  
  type Subscription {
      chatRoomInfo(chatRoomId: Int!): ChatRoom
      messageCreated(chatRoomId: Int!): Message
      chatRoomCreated: ChatRoom
  }
`;
