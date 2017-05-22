import React from 'react';
import Head from 'next/head';
// import Raven from 'raven-js';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import Header from '../components/Header/components';
import Footer from '../components/Footer/components';


export default function withAppLayout() {
  return (Component) => {
    class Layout extends React.Component {
      static getInitialProps({ req }) {
        const isServer = !!req;
        return { isServer };
      }
      constructor(props) {
        super(props);

        this.client = new ApolloClient({
          networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphql'})
        })

      }
      render() {
        return (
          <div>
            <Head>
              <title>TalkXXX</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
            </Head>
            <div className="body-container">
              <Header/>
              <div className="content">
                <ApolloProvider client={this.client}>
                  <Component {...this.props} />
                </ApolloProvider>
              </div>
              <Footer />
            </div>
          </div>
        );
      }
   }
    return Layout;
  };
}