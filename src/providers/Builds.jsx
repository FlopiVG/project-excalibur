import io from 'socket.io-client';
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
    this.socket = io();
    this.resources = [];
    this.socket.on('get_resources', (resources) => {
      this.resources = resources;
      this.checkBuildCanUpgrade();
    });
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  checkBuildCanUpgrade = () => {
    const { builds } = this.state;

    const buildsMapped = builds.map((build) => {
      let canUpgrade = true;
      build.upgradeCost.forEach((upgCost) => {
        this.resources.forEach((resource) => {
          if (
            upgCost._id === resource._id &&
            upgCost.quantity > resource.quantity
          ) {
            canUpgrade = false;
          }
        });
      });
      return this.mapBuild(build, canUpgrade);
    });

    Promise.all(buildsMapped)
      .then(data => this.setState({ builds: data }))
      // eslint-disable-next-line no-console
      .catch(console.log);
  };

  mapBuild = (build, canUpgrade = true) =>
    new Promise((resolve) => {
      resolve({ ...build, canUpgrade });
    });

  fetchBuilds = () => {
    this.setState({ loading: true, error: '' });
    userBuilds()
      .then(data => Promise.all(data.map(dat => this.mapBuild(dat))))
      .then(data => this.setState({ loading: false, builds: data }))
      .catch(error => this.setState({ loading: false, error }));
  };
  upgradeBuild = (_id) => {
    const { builds } = this.state;

    this.setState({ upgradeLoading: true });
    upgradeBuild(_id)
      .then(this.mapBuild)
      .then((data) => {
        this.setState({
          upgradeLoading: false,
          builds: builds.map(build => (build._id === data._id ? data : build)),
        });
        this.checkBuildCanUpgrade();
      })
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
