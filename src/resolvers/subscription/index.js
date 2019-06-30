import { pubsub } from '../../index';

export const messageCreated = {
  subscribe: (root, args, { pubsub }) => pubsub.asyncIterator('NEW_CHAT')
};
