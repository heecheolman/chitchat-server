import { GraphQLServer, PubSub } from 'graphql-yoga';

let chattingLog = [{
  id: 0,
  writer: 'admin',
  description: 'Hello'
}];

const typeDefs = `
  type Chat {
    id: Int!
    writer: String!
    description: String!
  }
  
  type Query {
    chatting: [Chat]!
  }
  
  type Mutation {
    write(writer: String!, description: String!): String!
  }
`;

const resolvers = {
  Query: {
    chatting: () => chattingLog
  },
  Mutation: {
    write: (_, { writer, description }) => {
      const id = chattingLog.length;
      const newChat = {
        id,
        writer,
        description
      };
      chattingLog.push(newChat);
      return 'OK';
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('graphQL server start!!'));
