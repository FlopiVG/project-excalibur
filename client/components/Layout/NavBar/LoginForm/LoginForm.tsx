import React, { Fragment } from 'react';
import { ILoginFormProps } from './ILoginFormProps.interface';
import { ILoginFormState } from './ILogiNFormState.interafce';

export default class extends React.Component<ILoginFormProps, ILoginFormState> {
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
    const {
      username: u,
      logout,
      logoutLoading,
      login,
      loginError,
      loginLoading,
    } = this.props;

    return (
      <Fragment>
        {u ? (
          <Fragment>
            <div className="navbar-item">{u}</div>
            <div className="navbar-item" onClick={logout}>
              <button
                className={`button is-primary ${logoutLoading && 'is-loading'}`}
                disabled={logoutLoading}
              >
                Logout
              </button>
            </div>
          </Fragment>
        ) : (
          <form onSubmit={e => this.handleSubmit(e, login)}>
            <div className="navbar-item has-text-danger">{loginError}</div>
            <div className="navbar-item">
              <input
                type="text"
                className={`input ${loginError && 'is-danger'}`}
                placeholder="Username"
                value={username}
                onChange={e => this.setState({ username: e.target.value })}
                disabled={loginLoading}
              />
            </div>
            <div className="navbar-item">
              <input
                type="password"
                className={`input ${loginError && 'is-danger'}`}
                placeholder="Password"
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                disabled={loginLoading}
              />
            </div>
            <div className="navbar-item">
              <button
                className={`button is-primary ${loginLoading && 'is-loading'}`}
                type="submit"
                disabled={!password || !username || loginLoading}
              >
                Login
              </button>
            </div>
          </form>
        )}
        <style scoped>
          {`
          form {
            display: flex;
          }
        `}
        </style>
      </Fragment>
    );
  }
}
