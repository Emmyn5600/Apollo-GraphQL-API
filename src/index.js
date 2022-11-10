import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";
import { context } from "./script.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen().then(({ url }) => {
  console.log(`Your API is Running ${url}:)`);
});
