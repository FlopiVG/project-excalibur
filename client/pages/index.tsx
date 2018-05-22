import React from 'react';

export default () => (
  <div className="container">
    <img
      className="responsive-img"
      src="http://elpajaroburlon.com/wp-content/uploads/2013/09/excalibur-11.jpg"
      alt="logo"
    />
    <h1>Index Page</h1>
    <div>
      <a className="waves-effect waves-light btn">button</a>
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
