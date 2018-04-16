class Login extends React.Component {
  render() {
    const userLogged = false

    return (
      <div className="navbar-end">
        { userLogged ? this.renderUserLogged() : this.renderUserLogout()}
      </div>
    )
  }

  renderUserLogout() {
    return (
      <form className="is-flex">
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
      </form>
    )
  }

  renderUserLogged() {
    return (
      <div className="is-flex">
        <div className="navbar-item">
          Generic Name
        </div>
        <div className="navbar-item">
          <a className="has-text-link">Disconnect</a>
        </div>
      </div>
    )
  }
}

export default Login