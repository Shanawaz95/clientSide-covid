import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import {
    ApolloClient,
    InMemoryCache,
  } from '@apollo/client'



const client = new ApolloClient({
    uri:"https://warm-island-01388.herokuapp.com/",
    cache: new InMemoryCache()
})

export default (
    <ApolloProvider client={client}>
        <App></App>
    </ApolloProvider>
)