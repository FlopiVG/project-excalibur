import React from 'react';
import Router from 'next/router';
import { UserDetailsApi } from './UserDetails.api';
import { IUserDetailsContext } from './interfaces/IUserDetailsContext.interface';

const initialContext: IUserDetailsContext = {
  token: '',
  username: '',
  login: () => {},
  loginLoading: false,
  loginError: '',
  logout: () => {},
  logoutLoading: false,
};

const { Provider, Consumer } = React.createContext<IUserDetailsContext>(
  initialContext,
);

export default class extends React.Component {
  UserDetailsApi = new UserDetailsApi();
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
    this.UserDetailsApi.login(data)
      .then(({ username, token, permissions }) =>
        this.setState({ loginLoading: false, username, token, permissions }),
      )
      .catch(loginError => this.setState({ loginLoading: false, loginError }));
  }

  logout() {
    this.setState({ logoutLoading: true });
    this.UserDetailsApi.logout().then(() => {
      this.setState({
        token: '',
        username: '',
        permissions: [],
        logoutLoading: false,
      });
      Router.push({
        pathname: '/',
      });
    });
  }

  whoAmi() {
    this.UserDetailsApi.whoAmi()
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
