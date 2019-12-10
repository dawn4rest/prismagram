require("dotenv").config();

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

import schema from "./schema";
import { sendSecretMail } from "./utils";

sendSecretMail("dawn4rest@gmail.com", "123");

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () => console.log(`Running on ${PORT}`));
