import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import MediaResolver from "./resolvers/media.resolver";
import logger from "./services/logger.service";
import dataSource from "./services/datas.service";

import "dotenv";
import CategoriesResolver from "./resolvers/categories.resolver";
import MusicsResolver from "./resolvers/musics.resolver";
import GameResolver from "./resolvers/games.resolver";
import MoviesResolver from "./resolvers/movies.resolver";

const PORT = process.env.APOLLO_SERVER_PORT || "4000";

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [
      MediaResolver,
      CategoriesResolver,
      GameResolver,
      MoviesResolver,
      MusicsResolver,
    ],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(PORT) },
  });

  logger.info(`🚀  Server ready at: ${url}`);
})();
