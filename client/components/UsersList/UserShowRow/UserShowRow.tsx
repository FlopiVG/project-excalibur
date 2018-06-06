import React, { Component, Fragment } from 'react';
import If from '../../utils-cmp/If';

interface IProps {
  _id: string;
  username: string;
  password: string;
  email: string;
  hasDelete: boolean;
  hasEdit: boolean;
  toggleEdit: (_id: string) => void;
}

export default class extends Component<IProps> {
  render() {
    const {
      _id,
      username,
      email,
      password,
      hasDelete,
      hasEdit,
      toggleEdit,
    } = this.props;
    return (
      <tr>
        <td>{_id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{password} ...</td>
        <td>
          <If condition={hasDelete}>
            <button className="button is-danger">
              <span className="icon">
                <i className="fas fa-trash-alt" />
              </span>
            </button>
          </If>
          <If condition={hasEdit}>
            <button className="button" onClick={() => toggleEdit(_id)}>
              <span className="icon">
                <i className="fas fa-edit" />
              </span>
            </button>
          </If>
        </td>
      </tr>
    );
  }
}
