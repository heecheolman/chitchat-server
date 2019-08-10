import { GraphQLServer, PubSub } from 'graphql-yoga';
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';

export const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { pubsub },
});

server.start(() => console.log('graphQL server start!!'));
