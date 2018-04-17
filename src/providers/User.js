import { logginUser, whoAmi, logoutUser } from "../apis/user";

const UserContext = React.createContext()

class UserProvider extends React.Component {
  state = {
    loading: false,
    error: '',
    userLogged: ''
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userLogged !== prevState.userLogged) {
      return {
        userLogged: nextProps.userLogged
      }
    }
    return null
  }

  doLogging(data) {
    this.setState({ loading: true})
    logginUser(data)
      .then((user) => this.setState({ loading: false, userLogged: user}))
      .catch((error) => this.setState({ error, loading: false }))
  }

  doWhoAmi() {
    this.setState({ loading: true })
    whoAmi()
      .then(user => this.setState({ userLogged: user, loading: false}))
      .catch(error => this.setState({ loading: false}))
  }

  doLoggout() {
    this.setState({ loading: true })
    logoutUser()
      .then(() => this.setState({ userLogged: '', loading: false}))
      .catch(() => this.setState({ loading: false}))
  }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state,
        doLogging: data => this.doLogging(data),
        doWhoAmi: () => this.doWhoAmi(),
        doLoggout: () => this.doLoggout()
      }}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}
export default UserProvider
export const Consumer = UserContext.Consumer