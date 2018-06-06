import React, { Component } from 'react';

interface IProps {
  _id: string;
  username: string;
  email: string;
  password: string;
  editCancel: () => void;
}

interface IState {
  _id: string;
  username: string;
  email: string;
  password: string;
}

export default class extends Component<IProps, IState> {
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
    const { _id, editCancel } = this.props;
    const { username, email, password } = this.state;

    return (
      <tr>
        <td>{_id}</td>
        <td>
          <RenderInput field="username" value={username} />
        </td>
        <td>
          <RenderInput field="email" value={email} type={email} />
        </td>
        <td>
          <RenderInput field="password" value={password} type={password} />
        </td>
        <td>
          <button className="button is-primary">
            <span className="icon">
              <i className="fas fa-check-circle" />
            </span>
          </button>
          <button className="button is-danger" onClick={editCancel}>
            <span className="icon">
              <i className="fas fa-ban" />
            </span>
          </button>
        </td>
      </tr>
    );
  }
}

const RenderInput = ({ field, value, type = 'text' }) => (
  <div className="field">
    <p className="control">
      <input
        type={type}
        className="input"
        value={value}
        onChange={e => this.setState({ [field]: e.target.value })}
      />
    </p>
  </div>
);
