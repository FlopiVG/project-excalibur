import React from 'react';
import { Schema } from 'mongoose';
import { IUsersContext } from './interfaces/IUsersContext.interface';
import { UserApi } from './Users.api';
import { IUserDto } from './dto/IUser.dto';
import { IUserCreate } from './interfaces/IUserCreate.interface';

const InitialContext: IUsersContext = {
  users: [],
  fetchUsersLoading: false,
  fetchUsersError: '',
  createUser: () => {},
  createUserLoading: false,
  createUserError: '',
  deleteUser: () => {},
  deleteUserLoading: false,
  deleteUserError: '',
};

const { Provider, Consumer } = React.createContext<IUsersContext>(
  InitialContext,
);

export default class extends React.Component<null, IUsersContext> {
  state = InitialContext;
  UsersApi = new UserApi();

  constructor(props) {
    super(props);

    this.fetchUsers = this.fetchUsers.bind(this);
    this.createUser = this.createUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({ fetchUsersLoading: true, fetchUsersError: '' });
    this.UsersApi.fetchUsers()
      .then((users: IUserDto[]) =>
        this.setState({ users, fetchUsersLoading: false }),
      )
      .catch((fetchUsersError: string) =>
        this.setState({ fetchUsersError, fetchUsersLoading: false }),
      );
  }

  createUser(userCreate: IUserCreate) {
    this.setState({ createUserLoading: true, createUserError: '' });
    this.UsersApi.createUser(userCreate)
      .then((user: IUserDto) =>
        this.setState({
          createUserLoading: false,
          users: this.state.users.concat(user),
        }),
      )
      .catch(createUserError =>
        this.setState({ createUserLoading: false, createUserError }),
      );
  }

  deleteUser(_id: Schema.Types.ObjectId) {
    this.setState({ deleteUserLoading: true, deleteUserError: '' });
    this.UsersApi.deleteUser(_id)
      .then((user: IUserDto) =>
        this.setState({
          deleteUserLoading: false,
          users: this.state.users.filter((u: IUserDto) => u._id !== user._id),
        }),
      )
      .catch(deleteUserError =>
        this.setState({ deleteUserLoading: false, deleteUserError }),
      );
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          createUser: this.createUser,
          deleteUser: this.deleteUser,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
