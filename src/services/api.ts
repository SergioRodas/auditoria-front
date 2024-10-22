import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT || "http://localhost:4000";

const client = new ApolloClient({
  uri: serverEndpoint + "/graphql",
  cache: new InMemoryCache(),
});

export { gql, client };
