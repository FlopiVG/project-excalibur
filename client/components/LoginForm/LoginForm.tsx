import React from 'react';
import AuthProvider, { Consumer } from '../../providers/Auth';

export default class extends React.Component {
  render() {
    return (
      <AuthProvider>
        <form>
          <div className="navbar-item">
            <input type="text" className="input" placeholder="Username" />
          </div>
          <div className="navbar-item">
            <input type="password" className="input" placeholder="Password" />
          </div>
          <div className="navbar-item">
            <button className="button is-primary" type="submit">
              Login
            </button>
            <Consumer>{context => console.log(context.token)}</Consumer>
          </div>
          <style scoped>
            {`
          form {
            display: flex;
          }
        `}
          </style>
        </form>
      </AuthProvider>
    );
  }
}
