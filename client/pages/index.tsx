import React from 'react';
import NewsList from '../components/NewsList';
import Layout from '../components/Layout';

import AuthProvider, { Consumer } from '../providers/UserDetails';
import { IUserDetailsContext } from '../providers/UserDetails/interfaces/IUserDetailsContext.interface';

export default class extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Consumer>
          {(context: IUserDetailsContext) => (
            <Layout {...context}>
              <NewsList />
            </Layout>
          )}
        </Consumer>
      </AuthProvider>
    );
  }
}
