import React, { Component } from 'react';
import { ICreateUserProps } from './ICreateUserProps.interface';
import { ICreateUserState } from './ICreateUserState.interface';

export default class extends Component<ICreateUserProps, ICreateUserState> {
  state = {
    toggleNewUser: false,
    username: '',
    email: '',
    password: '',
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { toggleNewUser, ...userPayload } = this.state;
    e.preventDefault();

    this.props.createUser(userPayload);
    this.setState({
      toggleNewUser: false,
      username: '',
      email: '',
      password: '',
    });
  }

  render() {
    const { toggleNewUser, username, email, password } = this.state;
    const { createUserError, createUserLoading } = this.props;
    return (
      <div>
        <button
          className={`button is-primary ${createUserLoading && 'is-loading'}`}
          onClick={() => this.setState({ toggleNewUser: !toggleNewUser })}
        >
          Add User
        </button>
        {createUserError && (
          <div className="tile notification has-text-danger">
            {createUserError}
          </div>
        )}
        {toggleNewUser && (
          <form className="is-block" onSubmit={this.handleSubmit}>
            <div className="columns is-marginless">
              <div className="field column">
                <div className="field-label is-normal is-pulled-left">
                  <label className="label">Username</label>
                </div>
                <div className="field">
                  <p className="control">
                    <input
                      type="text"
                      className="input"
                      value={username}
                      onChange={e =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </p>
                </div>
              </div>
              <div className="field column">
                <div className="field-label is-normal is-pulled-left">
                  <label className="label">Email</label>
                </div>
                <div className="field">
                  <p className="control">
                    <input
                      type="email"
                      className="input"
                      value={email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </p>
                </div>
              </div>
              <div className="field column">
                <div className="field-label is-normal is-pulled-left">
                  <label className="label">Password</label>
                </div>
                <div className="field">
                  <p className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="button is-primary"
                type="submit"
                disabled={!username || !email || !password}
              >
                Create
              </button>
              <button className="button is-secondary" type="reset">
                Clear
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
