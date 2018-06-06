import React, { Component } from 'react';
import { Consumer as UserDetailsConsumer } from '../../../providers/UserDetails';
import { Consumer as UserConsumer } from '../../../providers/Users';
import '../../../utils/Permissions';

interface IProps {
  _id: string;
  username: string;
  password: string;
  email: string;
  toggleEdit: (_id: string) => void;
}

export default Cmp =>
  class extends Component<IProps> {
    render() {
      const { _id, username, password, email, toggleEdit } = this.props;
      return (
        <UserConsumer>
          {({ deleteUser, deleteUserLoading }) => (
            <UserDetailsConsumer>
              {({ permissions }) => (
                <Cmp
                  _id={_id}
                  username={username}
                  password={`${password.slice(0, 20)} ...`}
                  email={email}
                  hasDelete={permissions.hasPermission('admin', 'read')}
                  hasEdit={permissions.hasPermission('admin', 'delete')}
                  toggleEdit={toggleEdit}
                  deleteUser={() => deleteUser(_id)}
                  deleteUserLoading={deleteUserLoading}
                />
              )}
            </UserDetailsConsumer>
          )}
        </UserConsumer>
      );
    }
  };
