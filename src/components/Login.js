class Login extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Login