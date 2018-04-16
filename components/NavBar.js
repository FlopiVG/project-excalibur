class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About</a>
        </div>
        <form>
          <div className="navbar-end">
            <div className="navbar-item control">
              <input className="input" type="text" name="username" placeholder="Username" />
            </div>
            <div className="navbar-item control">
              <input className="input" type="password" name="password" placeholder="Password" />
            </div>
            <div className="navbar-item">
              <button className="button" type="submit">Login</button>
            </div>
            <div className="navbar-item">
              <button className="button">Register</button>
            </div>
          </div>
        </form>
      </nav>
    )
  }
}

export default NavBar