import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import MediaResolver from "./resolvers/media.resolver";
import logger from "./services/logger.service";

import "dotenv";

const PORT = process.env.APOLLO_SERVER_PORT || "4000";

(async () => {
  const schema = await buildSchema({
    resolvers: [MediaResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(PORT) },
  });

  logger.info(`🚀  Server ready at: ${url}`);
})();
