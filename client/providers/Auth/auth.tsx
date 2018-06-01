import React from 'react';
import { AuthApi } from './auth.api';
import { IAuthContext } from './interfaces/IAuthContext.interface';

const initialContext: IAuthContext = {
  token: '',
  username: '',
  loginLoading: false,
  loginError: '',
  logoutLoading: false,
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
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.whoAmi();
  }

  componentDidMount() {
    const tokenFromSession: string = sessionStorage.getItem('token');

    if (this.state.token !== tokenFromSession) {
      this.setState({ token: tokenFromSession });
    }
  }

  login(data) {
    this.setState({ loginLoading: true, loginError: '' });
    this.authApi
      .login(data)
      .then(({ username, token, permissions }) =>
        this.setState({ loginLoading: false, username, token, permissions }),
      )
      .catch(loginError => this.setState({ loginLoading: false, loginError }));
  }

  logout() {
    this.setState({ logoutLoading: true });
    this.authApi.logout().then(() => {
      this.setState({
        token: '',
        username: '',
        logoutLoading: false,
      });
    });
  }

  whoAmi() {
    this.authApi
      .whoAmi()
      .then(({ username, token, permissions }) => {
        this.setState({ username, token, permissions });
      })
      .catch(() => {});
  }

  render() {
    return (
      <Provider
        value={{ ...this.state, login: this.login, logout: this.logout }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
