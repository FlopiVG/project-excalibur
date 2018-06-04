import React from 'react';
import NewsList from '../components/NewsList';
import NavBar from '../components/NavBar';

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
        <NavBar />
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
