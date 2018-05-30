import React, { Fragment } from 'react';
import AuthProvider, { Consumer } from '../../providers/Auth';
import { IAuthContext } from '../../providers/Auth/interfaces/authContext.interface';

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
          {(context: IAuthContext) =>
            context.username ? (
              <Fragment>
                <div className="navbar-item">{context.username}</div>
                <div className="navbar-item" onClick={context.logout}>
                  <button className="button is-primary">Logout</button>
                </div>
              </Fragment>
            ) : (
              <form onSubmit={e => this.handleSubmit(e, context.login)}>
                <div className="navbar-item">{context.loginError}</div>
                <div className="navbar-item">
                  <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    value={username}
                    onChange={e => this.setState({ username: e.target.value })}
                    disabled={context.loginLoading}
                  />
                </div>
                <div className="navbar-item">
                  <input
                    type="password"
                    className="input"
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
