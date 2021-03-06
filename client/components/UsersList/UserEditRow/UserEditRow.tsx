import React, { Component } from 'react';
import If from '../../utils-cmp/If';

interface IProps {
  _id: string;
  username: string;
  email: string;
  password: string;
  editCancel: () => void;
  edit: (user: any) => void;
}

interface IState {
  _id: string;
  username: string;
  email: string;
  password: string;
  showEditModal: boolean;
}

export default class extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      _id: props._id,
      username: props.username,
      email: props.email,
      password: props.password,
      showEditModal: false,
    };
    this.toggleEditModal = this.toggleEditModal.bind(this);
  }

  toggleEditModal() {
    const { showEditModal } = this.state;

    this.setState({ showEditModal: !showEditModal });
  }

  render() {
    const { _id, editCancel, edit } = this.props;
    const { username, email, password, showEditModal } = this.state;

    return (
      <tr>
        <td>{_id}</td>
        <td>
          <RenderInput
            value={username}
            handleChange={e => this.setState({ username: e.target.value })}
          />
        </td>
        <td>
          <RenderInput
            value={email}
            type={email}
            handleChange={e => this.setState({ email: e.target.value })}
          />
        </td>
        <td>
          <RenderInput
            value={password}
            type={password}
            handleChange={e => this.setState({ password: e.target.value })}
          />
        </td>
        <td>
          <button className="button is-primary" onClick={this.toggleEditModal}>
            <span className="icon">
              <i className="fas fa-check-circle" />
            </span>
          </button>
          <button className="button is-danger" onClick={editCancel}>
            <span className="icon">
              <i className="fas fa-ban" />
            </span>
          </button>
          <If condition={showEditModal}>
            <EditModal
              cancel={this.toggleEditModal}
              confirm={() => edit({ username, password, email })}
            />
          </If>
        </td>
      </tr>
    );
  }
}

const RenderInput = ({ value, type = 'text', handleChange }) => (
  <div className="field">
    <p className="control">
      <input
        type={type}
        className="input"
        value={value}
        onChange={handleChange}
      />
    </p>
  </div>
);

const EditModal = ({ cancel, confirm }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Edit User</p>
        <button className="delete" onClick={cancel} />
      </header>
      <section className="modal-card-body">
        <div className="title is-5">
          Are you sure you want to edit this user?
        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-danger" onClick={confirm}>
          Edit
        </button>
        <button className="button" onClick={cancel}>
          Cancel
        </button>
      </footer>
    </div>
  </div>
);
