import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ApolloProvider } from 'react-apollo';
import client from "./utils/apolloClient";

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root")
);
