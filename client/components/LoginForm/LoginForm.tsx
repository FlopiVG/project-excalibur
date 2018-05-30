import React, { FormEvent } from 'react';
import AuthProvider, { Consumer } from '../../providers/Auth';
import { IAuthContext } from '../../providers/Auth/interfaces/authContext.interface';

const TestComponent = () => <div>Test Component</div>;

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
  }

  render() {
    const { username, password } = this.state;

    return (
      <AuthProvider>
        <Consumer>
          {(context: IAuthContext) =>
            context.username ? (
              <div>{context.username}</div>
            ) : (
              <form onSubmit={e => this.handleSubmit(e, context.login)}>
                <div>{context.loginError}</div>
                <div className="navbar-item">
                  <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    value={username}
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                </div>
                <div className="navbar-item">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
                <div className="navbar-item">
                  <button className="button is-primary" type="submit">
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
