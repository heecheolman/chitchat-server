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
      users: [User]!
      messages: [Message]!
  }
  
  type Query {
      chatrooms: [ChatRoom]
      chatroom(id: Int!): ChatRoom
      messages(chatroomId: Int!): [Message]
      users: [User]
      user(id: Int!): User
  }
  
  type Mutation {
      createMessage(chatroomId: Int!, userId: Int!, content: String!): Message!
      createUser(userName: String!): User!
      createChatroom(userId: Int!, title: String!): ChatRoom!
      joinChatroom(chatroomId: Int!, userId: Int!): ChatRoom!
  }
  
  type Subscription {
      messageCreated(chatroomId: Int!): Message
  }
`;
