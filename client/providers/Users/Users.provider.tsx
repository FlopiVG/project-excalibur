import React from 'react';
import { IUsersContext } from './interfaces/IUsersContext.interface';
import { UserApi } from './Users.api';
import { IUsersDto } from './dto/IUsers.dto';

const InitialContext: IUsersContext = {
  users: [],
  fetchUsersLoading: false,
  fetchUsersError: '',
};

const { Provider, Consumer } = React.createContext<IUsersContext>(
  InitialContext,
);

export default class extends React.Component {
  state = InitialContext;
  UsersApi = new UserApi();

  constructor(props) {
    super(props);

    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({ fetchUsersLoading: true });
    this.UsersApi.fetchUsers()
      .then((users: IUsersDto[]) =>
        this.setState({ users, fetchUsersLoading: false }),
      )
      .catch((fetchUsersError: string) =>
        this.setState({ fetchUsersError, fetchUsersLoading: false }),
      );
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer };
