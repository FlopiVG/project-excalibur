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
            <div className="navbar-item">
              <div className="control has-icons-left">
                <input className="input" type="text" name="username" placeholder="Username" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </div>
            </div>
            <div className="navbar-item">
              <div className="control has-icons-left">
                <input className="input" type="password" name="password" placeholder="Password" />
                <span className="icon is-small is-left">
                  <i className="fas fa-key" />
                </span>
              </div>
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