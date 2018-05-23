import React from 'react';
import Link from 'next/link';

export default () => (
  <div className="container">
    <div>
      <img
        src="http://elpajaroburlon.com/wp-content/uploads/2013/09/excalibur-11.jpg"
        alt="logo"
      />
    </div>
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {/* Remove comment when user is logged
          <li>
            <Link href="/game">
              <a>Game</a>
            </Link>
          </li>*/}
        </ul>
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
        `}
    </style>
  </div>
);
