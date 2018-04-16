import { logginUser, whoAmi } from "../apis";

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    loading: false,
    error: '',
    userLogged: false
  }

  constructor(props) {
    super(props)

    this.renderUserLogged = this.renderUserLogged.bind(this)
    this.onSubmitLoggin = this.onSubmitLoggin.bind(this)
  }

  componentWillMount() {
    whoAmi()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  onSubmitLoggin(e) {
    const { username, password } = this.state
    e.preventDefault()

    this.setState({ loading: true })

    logginUser({ username, password })
      .then(() => this.setState({ userLogged: true, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
  }

  render() {
    const { userLogged } = this.state

    return (
      <div className="navbar-end">
        {userLogged ? this.renderUserLogged() : this.renderUserLogout()}
      </div>
    )
  }

  renderUserLogout() {
    const { username, password, loading, error } = this.state

    return (
      <form className="is-flex" onSubmit={this.onSubmitLoggin}>
        <div className="navbar-item">
          <p className="help is-danger">{error}</p>
        </div>
        <div className="navbar-item">
          <div className="control has-icons-left">
            <input className={`input ${error && 'is-danger'}`} type="text" placeholder="Username" value={username} disabled={loading} />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>
        <div className="navbar-item">
          <div className="control has-icons-left">
            <input className={`input ${error && 'is-danger'}`} type="password" placeholder="Password" value={password} disabled={loading} />
            <span className="icon is-small is-left">
              <i className="fas fa-key" />
            </span>
          </div>
        </div>
        <div className="navbar-item">
          <button className={`button ${loading && 'is-loading'}`} type="submit">Login</button>
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