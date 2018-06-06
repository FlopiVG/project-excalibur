import React, { Component } from 'react';

interface IProps {
  _id: string;
  username: string;
  password: string;
  email: string;
  editCancel: () => void;
}

export default Cmp =>
  class extends Component<IProps> {
    render() {
      const { _id, username, password, email, editCancel } = this.props;
      return (
        <Cmp
          _id={_id}
          username={username}
          password={password}
          email={email}
          editCancel={editCancel}
        />
      );
    }
  };
