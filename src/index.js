import { GraphQLServer, PubSub } from 'graphql-yoga';
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';

export const pubsub = new PubSub();
// const NEW_CHAT = 'NEW_CHAT';

// let chattingLog = [{
//   id: 0,
//   writer: 'admin',
//   description: 'Hello'
// }];

// const typeDefs = `
//   type Chat {
//     id: Int!
//     writer: String!
//     description: String!
//   }
//
//   type Query {
//     chatting: [Chat]!
//   }
//
//   type Mutation {
//     write(writer: String!, description: String!): String!
//   }
//   type Subscription {
//     newChat: Chat
//   }
// `;

// const resolvers = {
//   Query: {
//     chatting: () => chattingLog
//   },
//   Mutation: {
//     write: (_, { writer, description }) => {
//       const id = chattingLog.length;
//       const newChat = {
//         id,
//         writer,
//         description
//       };
//       chattingLog.push(newChat);
//       pubsub.publish(NEW_CHAT, { newChat });
//       return 'OK';
//     }
//   },
//   Subscription: {
//     newChat: {
//       subscribe: (root, args, { pubsub }) => pubsub.asyncIterator(NEW_CHAT)
//     }
//   }
// };

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { pubsub }
});

server.start(() => console.log('graphQL server start!!'));
