import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getMedias } from "./resolvers/media.resolver";
import logger from "./services/logger.service";

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

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  logger.info(`🚀  Server ready at: ${url}`);
})();
