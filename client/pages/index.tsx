import React from 'react';
import Link from 'next/link';
import LoginForm from '../components/LoginForm';
import NewsList from '../components/NewsList';

export default class extends React.Component {
  static async getInitialProps() {
    return { news: [] };
  }
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
            <LoginForm />
          </div>
        </nav>
        <div className="section">
          <div className="tile is-ancestor is-vertical">
            <NewsList />
          </div>
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
