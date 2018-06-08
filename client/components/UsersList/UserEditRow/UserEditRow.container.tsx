import React, { Component } from 'react';
import { Consumer as UserConsumer } from '../../../providers/Users';

interface IProps {
  _id: string;
  username: string;
  password: string;
  email: string;
  editCancel: () => void;
}

export default Cmp =>
  class extends Component<IProps> {
    constructor(props) {
      super(props);

      this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(user, editUser) {
      const { editCancel, ...rest } = this.props;
      const editPayload = {
        _id: rest._id,
      };

      for (let key in user) {
        if (user[key] !== rest[key]) editPayload[key] = user[key];
      }

      editUser(editPayload);
      editCancel();
    }

    render() {
      const { _id, username, password, email, editCancel } = this.props;
      return (
        <UserConsumer>
          {({ editUser }) => (
            <Cmp
              _id={_id}
              username={username}
              password={password}
              email={email}
              editCancel={editCancel}
              edit={user => this.handleEdit(user, editUser)}
            />
          )}
        </UserConsumer>
      );
    }
  };
