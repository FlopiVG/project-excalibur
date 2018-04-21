import { userBuilds } from '../apis/game';

const BuildsContext = React.createContext();

class BuildsProvider extends React.Component {
  state = {
    loading: false,
    error: '',
    builds: [],
  };

  componentDidMount() {
    this.fetchBuilds();
  }

  fetchBuilds = () => {
    this.setState({ loading: true, error: '' });
    userBuilds()
      .then(data => this.setState({ loading: false, builds: data }))
      .catch(error => this.setState({ loading: false, error }));
  };
  render() {
    const { loading, builds, error } = this.state;
    return (
      <BuildsContext.Provider value={{ loading, builds, error }}>
        {this.props.children}
      </BuildsContext.Provider>
    );
  }
}

export default BuildsProvider;
export const { Consumer } = BuildsContext;
