import Link from 'next/link';
import Login from './Login';
import { Consumer } from '../providers/User';

const NavBar = () => (
  <nav className="navbar" aria-label="main navigation">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        Home
      </a>
      <a className="navbar-item" href="/about">
        About
      </a>
      <Consumer>
        {context =>
          context.state.userLogged && (
            <Link href="/game">
              <a className="navbar-item" href="/#">
                Game
              </a>
            </Link>
          )
        }
      </Consumer>
    </div>
    <Login />
  </nav>
);

export default NavBar;
