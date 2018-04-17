import Link from 'next/link'
import Login from "./Login"
import { Consumer } from '../providers/User'

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About</a>
          <Consumer>
            {context => context.state.userLogged && <Link href="/game"><a className="navbar-item">Game</a></Link>}
          </Consumer>
        </div>
        <Login />
      </nav>
    )
  }
}

export default NavBar