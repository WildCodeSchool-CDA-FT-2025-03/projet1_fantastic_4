import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientApollo = new ApolloClient({
  uri: import.meta.env.VITE_APOLLO_SERVER,
  cache: new InMemoryCache(),
});

export default clientApollo;
