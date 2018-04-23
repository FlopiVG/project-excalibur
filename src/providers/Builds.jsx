import { userBuilds, upgradeBuild } from '../apis/game';

const BuildsContext = React.createContext();

class BuildsProvider extends React.Component {
  state = {
    loading: false,
    upgradeLoading: false,
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
  upgradeBuild = (_id) => {
    const { builds } = this.state;

    this.setState({ upgradeLoading: true });
    upgradeBuild(_id)
      .then(data =>
        this.setState({
          upgradeLoading: false,
          builds: builds.map(build => (build._id === data._id ? data : build)),
        }))
      .catch(() => this.setState({ upgradeLoading: false }));
  };
  render() {
    const {
      loading, builds, error, upgradeLoading,
    } = this.state;
    return (
      <BuildsContext.Provider
        value={{
          loading,
          builds,
          error,
          upgradeLoading,
          upgradeBuild: id => this.upgradeBuild(id),
        }}
      >
        {this.props.children}
      </BuildsContext.Provider>
    );
  }
}

export default BuildsProvider;
export const { Consumer } = BuildsContext;
