import { logginUser, whoAmi } from "../apis";

const UserContext = React.createContext()

class UserProvider extends React.Component {
  state = {
    loading: false,
    error: '',
    userLogged: ''
  }

  componentDidMount() {
    this.doWhoAmi()
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

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state,
        doLogging: data => this.doLogging(data),
        doWhoAmi: () => this.doWhoAmi()
      }}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}
export default UserProvider
export const Consumer = UserContext.Consumer