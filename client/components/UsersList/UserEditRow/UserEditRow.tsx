import React, { Component, Fragment } from 'react';
import { IUserEditRowProps } from './IUserEditRowProps.interface';
import { IUserEditRowState } from './IUserEditRowState.interface';

export default class extends Component<IUserEditRowProps, IUserEditRowState> {
  constructor(props) {
    super(props);

    this.state = {
      _id: props._id,
      username: props.username,
      email: props.email,
      password: props.password,
    };
  }
  render() {
    const { _id, userEditCancel } = this.props;
    const { username, email, password } = this.state;

    return (
      <Fragment>
        <td>{_id}</td>
        <td>
          <div className="field">
            <p className="control">
              <input
                type="text"
                className="input"
                value={username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </p>
          </div>
        </td>
        <td>
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
        </td>
        <td>
          <div className="field">
            <p className="control">
              <input
                type="text"
                className="input"
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </p>
          </div>
          <button className="button is-primary">
            <span className="icon">
              <i className="fas fa-check-circle" />
            </span>
          </button>
          <button className="button is-danger" onClick={userEditCancel}>
            <span className="icon">
              <i className="fas fa-ban" />
            </span>
          </button>
        </td>
      </Fragment>
    );
  }
}
