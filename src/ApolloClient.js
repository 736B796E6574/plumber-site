import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "",
  headers: {
    "x-hasura-admin-secret": "GH8C9p1MVnC1RtopFtxiCzU7meS9heJ70D5POqoFQZ3Tno0Vsr9F0JltO5EvdwXK",
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
