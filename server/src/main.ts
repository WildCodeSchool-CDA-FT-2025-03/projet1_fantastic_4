import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getMedias } from "./resolvers/media.resolver";
import logger from "./services/logger.service";

import "dotenv";

const typeDefs = `#graphql
  type Query {
    getMedias: [String],
  }
`;

const resolvers = {
  Query: {
    getMedias,
  },
  // Mutation: {},
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.APOLLO_SERVER_PORT || "4000";
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(PORT) },
  });

  logger.info(`🚀  Server ready at: ${url}`);
})();
