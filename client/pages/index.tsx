import React from 'react';
import Link from 'next/link';

export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <figure className="image">
          <img
            src="http://elpajaroburlon.com/wp-content/uploads/2013/09/excalibur-11.jpg"
            alt="logo"
          />
        </figure>
        <nav className="navbar" aria-label="main navigation">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            {/* Remove when page /game is ready
        <Link href="/game">
          <a className="navbar-item">Game</a>
        </Link>
        */}
          </div>
          <div className="navbar-end">
            <form>
              <div className="navbar-item">
                <input type="text" className="input" placeholder="Username" />
              </div>
              <div className="navbar-item">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
              <div className="navbar-item">
                <button className="button is-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </nav>
        <div>
          <a className="button is-primary">button</a>
        </div>
        <style scoped>
          {`
          img {
            max-height: 200px;
            width: 100%;
          }
          form {
            display: flex;
          }
        `}
        </style>
      </div>
    );
  }
}
