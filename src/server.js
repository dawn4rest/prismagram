require("dotenv").config();

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

import schema from "./schema";
import { authenticateJwt } from "./passport";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});

// Express Middleware
server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => console.log(`Running on ${PORT}`));
