import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientApollo = new ApolloClient({
  uri: import.meta.env.VITE_APOLLO_SERVER || "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default clientApollo;
