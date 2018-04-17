import { logginUser, whoAmi } from "../apis";
import { Consumer } from '../providers/User'

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  constructor(props) {
    super(props)

    this.renderUserLogged = this.renderUserLogged.bind(this)
  }

  render() {
    const { userLogged } = this.state

    return (
      <div className="navbar-end">
        <Consumer>
          {(context) => context.state.userLogged ? this.renderUserLogged(context) : this.renderUserLogout(context)}
        </Consumer>
      </div>
    )
  }

  renderUserLogout(context) {
    const { username, password } = this.state
    const { state: { loading, error }} = context

    return (
      <div className="is-flex">
        <div className="navbar-item">
          <p className="help is-danger">{error}</p>
        </div>
        <div className="navbar-item">
          <div className="control has-icons-left">
            <input className={`input ${error && 'is-danger'}`} type="text" placeholder="Username" value={username} disabled={loading} onChange={(e) => this.setState({ username: e.target.value})} />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>
        <div className="navbar-item">
          <div className="control has-icons-left">
            <input className={`input ${error && 'is-danger'}`} type="password" placeholder="Password" value={password} disabled={loading} onChange={(e) => this.setState({ password: e.target.value})} />
            <span className="icon is-small is-left">
              <i className="fas fa-key" />
            </span>
          </div>
        </div>
        <div className="navbar-item">
          <button className={`button ${loading && 'is-loading'}`} onClick={() => context.doLogging(this.state)}>Login</button>
        </div>
        <div className="navbar-item">
          <button className="button">Register</button>
        </div>
      </div>
    )
  }

  renderUserLogged(context) {
    const { state: { userLogged }} = context
    return (
      <div className="is-flex">
        <div className="navbar-item">
          {userLogged}
        </div>
        <div className="navbar-item">
          <a className="has-text-link">Disconnect</a>
        </div>
      </div>
    )
  }
}

export default Login