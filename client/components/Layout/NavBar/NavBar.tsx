import '../../../utils/Permissions';
import React from 'react';
import Link from 'next/link';
import LoginForm from './LoginForm';
import { IUserDetailsContext } from '../../../providers/UserDetails/interfaces/IUserDetailsContext.interface';

export default class extends React.Component<IUserDetailsContext> {
  render() {
    const { permissions = [], ...authenticate } = this.props;
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
          {permissions.hasPermission('admin', 'read') && (
            <Link href="/admin">
              <a className="navbar-item">Admin</a>
            </Link>
          )}
        </div>
        <div className="navbar-end">
          <LoginForm {...authenticate} />
        </div>
      </nav>
    );
  }
}
