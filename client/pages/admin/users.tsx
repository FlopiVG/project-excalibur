import React from 'react';

import AuthProvider, { Consumer } from '../../providers/UserDetails';
import { IUserDetailsContext } from '../../providers/UserDetails/interfaces/IUserDetailsContext.interface';
import LayoutAdmin from '../../components/LayoutAdmin';

export default class extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Consumer>
          {(context: IUserDetailsContext) => (
            <LayoutAdmin {...context}>Admin/User</LayoutAdmin>
          )}
        </Consumer>
      </AuthProvider>
    );
  }
}
