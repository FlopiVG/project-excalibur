import React from 'react';
import Link from 'next/link';
import LoginForm from './LoginForm';

export default class extends React.Component {
  render() {
    return (
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
          <Link href="/admin">
            <a className="navbar-item">Admin</a>
          </Link>
        </div>
        <div className="navbar-end">
          <LoginForm />
        </div>
      </nav>
    );
  }
}
