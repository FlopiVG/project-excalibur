import React, { Fragment } from 'react';
import UsersProvider, { Consumer } from '../../providers/Users';
import { IUsersContext } from '../../providers/Users/interfaces/IUsersContext.interface';
import { IUserDto } from '../../providers/Users/dto/IUser.dto';
import CreateUser from './CreateUser';

export default class extends React.Component {
  render() {
    return (
      <UsersProvider>
        <h1 className="title">Users List</h1>
        <Consumer>
          {(context: IUsersContext) => (
            <Fragment>
              <CreateUser
                createUser={context.createUser}
                createUserLoading={context.createUserLoading}
                createUserError={context.createUserError}
              />
              {context.fetchUsersLoading ? (
                <div>Loading...</div>
              ) : (
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Password (Encrypted)</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {context.users.map((user: IUserDto) => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.password.slice(0, 20)} ...</td>
                        <td>
                          <button
                            className="button is-danger"
                            onClick={() => context.deleteUser(user._id)}
                          >
                            <span className="icon">
                              <i className="fas fa-trash-alt" />
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Fragment>
          )}
        </Consumer>
      </UsersProvider>
    );
  }
}
