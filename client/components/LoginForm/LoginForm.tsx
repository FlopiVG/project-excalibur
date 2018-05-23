import React from 'react';

export default class extends React.Component {
  render() {
    return (
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
        </div>
        <style scoped>
          {`
          form {
            display: flex;
          }
        `}
        </style>
      </form>
    );
  }
}
