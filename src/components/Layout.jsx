import PropTypes from 'prop-types';
import UserProvider from '../providers/User';
import NavBar from './NavBar';

const Layout = ({ userLogged, children }) => (
  <UserProvider userLogged={userLogged}>
    <div className="container">
      <figure className="image">
        <img
          src="http://elpajaroburlon.com/wp-content/uploads/2013/09/excalibur-11.jpg"
          alt="logo"
        />
      </figure>
      <NavBar />
      <section className="section">{children}</section>
      <style jsx scoped>
        {`
          img {
            max-height: 160px;
          }
        `}
      </style>
    </div>
  </UserProvider>
);

Layout.propTypes = {
  userLogged: PropTypes.string,
};

Layout.defaultProps = {
  userLogged: '',
};

export default Layout;
