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
  deleteUser: () => void;
  deleteUserLoading: boolean;
}

interface IState {
  showDeleteModal: boolean;
}

export default class extends Component<IProps, IState> {
  state = {
    showDeleteModal: false,
  };

  constructor(props) {
    super(props);

    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
  }

  toggleDeleteModal() {
    const { showDeleteModal } = this.state;

    this.setState({ showDeleteModal: !showDeleteModal });
  }

  render() {
    const {
      _id,
      username,
      email,
      password,
      hasDelete,
      hasEdit,
      toggleEdit,
      deleteUser,
      deleteUserLoading,
    } = this.props;
    const { showDeleteModal } = this.state;

    return (
      <tr>
        <td>{_id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>
          <If condition={hasDelete}>
            <button
              className="button is-danger"
              disabled={deleteUserLoading}
              onClick={this.toggleDeleteModal}
            >
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
          <If condition={showDeleteModal}>
            <DeleteModal cancel={this.toggleDeleteModal} confirm={deleteUser} />
          </If>
        </td>
      </tr>
    );
  }
}

const DeleteModal = ({ cancel, confirm }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Delete User</p>
        <button className="delete" onClick={cancel} />
      </header>
      <section className="modal-card-body">
        <div className="title is-5">
          Are you sure you want to delete this user?
        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-danger" onClick={confirm}>
          Delete
        </button>
        <button className="button" onClick={cancel}>
          Cancel
        </button>
      </footer>
    </div>
  </div>
);
