import React from 'react';
import Link from 'next/link';
import Layout from '../Layout';
import { IUserDetailsContext } from '../../providers/UserDetails/interfaces/IUserDetailsContext.interface';

export default class extends React.Component<IUserDetailsContext> {
  render() {
    const { children, ...userDetails } = this.props;
    return (
      <Layout {...userDetails}>
        <div className="columns">
          <aside className="menu column is-2">
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <Link href="/admin/users">
                  <a>Users</a>
                </Link>
              </li>
            </ul>
          </aside>
          <div className="column">{children}</div>
        </div>
      </Layout>
    );
  }
}
