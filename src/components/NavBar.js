import Login from "./Login";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About</a>
        </div>
        <Login />
      </nav>
    )
  }
}

export default NavBar