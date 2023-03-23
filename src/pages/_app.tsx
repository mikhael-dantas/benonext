import MyLayout from "@myComponents/layout"
import { AppProps } from "next/app"
import { Provider } from 'react-redux';

import '../styles/styles.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from "src/redux/store"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart);

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:3041/graphql',
    // uri: 'https://backend:3041/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </Provider>
    </ApolloProvider>
  )
}

export default MyApp
