import React, { Fragment } from 'react';
import If from '../utils-cmp/If';
import UsersProvider, { Consumer } from '../../providers/Users';
import { Consumer as UserDetailsConsumer } from '../../providers/UserDetails';
import { IUsersContext } from '../../providers/Users/interfaces/IUsersContext.interface';
import { IUserDto } from '../../providers/Users/dto/IUser.dto';
import CreateUser from './CreateUser';
import { IUserDetailsContext } from '../../providers/UserDetails/interfaces/IUserDetailsContext.interface';
import UserShowRow from './UserShowRow';
import UserEditRow from './UserEditRow';

interface IUsersListState {
  showDeleteModal: boolean;
  activeUserId: string;
  actionFn(_id: string);
  editUserId: string;
}

export default class extends React.Component<null, IUsersListState> {
  constructor(props) {
    super(props);

    this.renderDeleteModal = this.renderDeleteModal.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  state = {
    showDeleteModal: false,
    activeUserId: '',
    actionFn: (_id: string) => {},
    editUserId: '',
  };

  handleDelete(_id, deleteFn) {}

  toggleEdit(_id) {
    const { editUserId } = this.state;

    this.setState({ editUserId: _id === editUserId ? '' : _id });
  }

  renderDeleteModal() {
    const { showDeleteModal, activeUserId, actionFn } = this.state;
    return (
      <div className={`modal ${showDeleteModal && 'is-active'}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Delete User</p>
            <button
              className="delete"
              onClick={() =>
                this.setState({
                  showDeleteModal: false,
                  actionFn: () => {},
                  activeUserId: '',
                })
              }
            />
          </header>
          <section className="modal-card-body">
            <div className="title is-5">
              Are you sure you want to delete this user?
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-danger"
              onClick={() => {
                actionFn(activeUserId);
                this.setState({
                  showDeleteModal: false,
                  actionFn: () => {},
                  activeUserId: '',
                });
              }}
            >
              Delete
            </button>
            <button
              className="button"
              onClick={() =>
                this.setState({
                  showDeleteModal: false,
                  actionFn: () => {},
                  activeUserId: '',
                })
              }
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }

  render() {
    const { showDeleteModal, editUserId } = this.state;
    return (
      <UsersProvider>
        {this.renderDeleteModal()}
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
                      <Fragment key={user._id}>
                        <If condition={editUserId !== user._id}>
                          <UserShowRow {...user} toggleEdit={this.toggleEdit} />
                        </If>
                        <If condition={editUserId === user._id}>
                          <UserEditRow
                            {...user}
                            editCancel={() => this.toggleEdit('')}
                          />
                        </If>
                      </Fragment>
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
