import React from 'react';

import Router from 'next/router';
import '../../utils/Permissions';
import { UserDetailsApi } from '../../providers/UserDetails/UserDetails.api';
import AuthProvider, { Consumer } from '../../providers/UserDetails';
import { IUserDetailsContext } from '../../providers/UserDetails/interfaces/IUserDetailsContext.interface';
import LayoutAdmin from '../../components/LayoutAdmin';
import UsersList from '../../components/UsersList';

export default class extends React.Component {
  static async getInitialProps({ res }) {
    const userDetailsApi: UserDetailsApi = new UserDetailsApi();
    let hasPermissions: boolean = false;

    try {
      const whoami = await userDetailsApi.whoAmi();
      hasPermissions = whoami.permissions.hasPermission('admin', 'read');
    } catch (e) {}

    if (res && !hasPermissions) {
      res.writeHead(302, { Location: '/' });
      res.end();
      res.finished = true;
    } else if (!hasPermissions) {
      Router.replace('/');
    } else {
      return {};
    }
  }

  render() {
    return (
      <AuthProvider>
        <Consumer>
          {(context: IUserDetailsContext) => (
            <LayoutAdmin {...context}>
              <UsersList />
            </LayoutAdmin>
          )}
        </Consumer>
      </AuthProvider>
    );
  }
}
