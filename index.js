/**
 * @format
 */

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-pokeapi.graphcdn.app/'
})

const AppMain = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

AppRegistry.registerComponent(appName, () => AppMain);
