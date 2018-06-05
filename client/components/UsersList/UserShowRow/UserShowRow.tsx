import React, { Component, Fragment } from 'react';
import { IUserShowRowProps } from './IUserShowRowProps.interface';

export default class extends Component<IUserShowRowProps> {
  render() {
    const { _id, username, email, password } = this.props;
    return (
      <Fragment>
        <td>{_id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{password.slice(0, 20)} ...</td>
      </Fragment>
    );
  }
}
