import React from 'react';
import { AuthApi } from './auth.api';
import { IAuthContext } from './interfaces/authContext.interface';

const initialContext: IAuthContext = {
  token: '',
  username: '',
  loginLoading: false,
  loginError: '',
};

const { Provider, Consumer } = React.createContext<IAuthContext>(
  initialContext,
);

export default class extends React.Component {
  authApi = new AuthApi();
  state = initialContext;

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(data) {
    this.setState({ loginLoading: true, loginError: '' });
    this.authApi
      .login(data)
      .then(({ username, token }) =>
        this.setState({ loading: false, username, token }),
      )
      .catch(error => this.setState({ loading: false, error }));
  }

  render() {
    return (
      <Provider value={{ ...this.state, login: this.login }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
