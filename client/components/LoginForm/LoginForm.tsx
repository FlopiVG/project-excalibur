import React, { Fragment } from 'react';
import AuthProvider, { Consumer } from '../../providers/UserDetails';
import { IUserDetailsContext } from '../../providers/UserDetails/interfaces/IUserDetailsContext.interface';

export default class extends React.Component {
  state = {
    username: '',
    password: '',
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, login: Function) {
    e.preventDefault();
    login(this.state);
    this.setState({ username: '', password: '' });
  }

  render() {
    const { username, password } = this.state;

    return (
      <AuthProvider>
        <Consumer>
          {(context: IUserDetailsContext) =>
            context.username ? (
              <Fragment>
                <div className="navbar-item">{context.username}</div>
                <div className="navbar-item" onClick={context.logout}>
                  <button
                    className={`button is-primary ${context.logoutLoading &&
                      'is-loading'}`}
                    disabled={context.logoutLoading}
                  >
                    Logout
                  </button>
                </div>
              </Fragment>
            ) : (
              <form onSubmit={e => this.handleSubmit(e, context.login)}>
                <div className="navbar-item has-text-danger">
                  {context.loginError}
                </div>
                <div className="navbar-item">
                  <input
                    type="text"
                    className={`input ${context.loginError && 'is-danger'}`}
                    placeholder="Username"
                    value={username}
                    onChange={e => this.setState({ username: e.target.value })}
                    disabled={context.loginLoading}
                  />
                </div>
                <div className="navbar-item">
                  <input
                    type="password"
                    className={`input ${context.loginError && 'is-danger'}`}
                    placeholder="Password"
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                    disabled={context.loginLoading}
                  />
                </div>
                <div className="navbar-item">
                  <button
                    className={`button is-primary ${context.loginLoading &&
                      'is-loading'}`}
                    type="submit"
                    disabled={!password || !username || context.loginLoading}
                  >
                    Login
                  </button>
                </div>
              </form>
            )
          }
        </Consumer>
        <style scoped>
          {`
          form {
            display: flex;
          }
        `}
        </style>
      </AuthProvider>
    );
  }
}
