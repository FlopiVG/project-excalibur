import React from 'react';
import { AuthApi } from './auth.api';

const { Provider, Consumer } = React.createContext('auth');

export default class extends React.Component {
  authApi = new AuthApi();

  render() {
    return <Provider value="auth">{this.props.children}</Provider>;
  }
}

export { Consumer };
