import React from 'react';
import NavBar from './NavBar';
import { IUserDetailsContext } from '../../providers/UserDetails/interfaces/IUserDetailsContext.interface';

export default class extends React.Component<IUserDetailsContext> {
  render() {
    const { children, ...userDetails } = this.props;
    return (
      <div className="container">
        <figure className="image">
          <img
            src="http://elpajaroburlon.com/wp-content/uploads/2013/09/excalibur-11.jpg"
            alt="logo"
          />
        </figure>
        <NavBar {...userDetails} />
        <div className="section">
          <div className="tile is-ancestor is-vertical">{children}</div>
        </div>
        <style scoped>
          {`
          img {
            max-height: 200px;
            width: 100%;
          }
        `}
        </style>
      </div>
    );
  }
}
