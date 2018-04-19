import io from 'socket.io-client';
import { updateBuild } from '../apis/game';

const ResourcesContext = React.createContext();

class ResourcesProvider extends React.Component {
  state = {
    resources: [],
    loadingUpdate: false,
    errorUpdate: '',
  };
  componentDidMount() {
    this.socket = io();
    this.socket.on('get_resources', this.onGetResources);
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  onUpdateBuild = (id) => {
    this.setState({ loadingUpdate: true, errorUpdate: '' });
    updateBuild(id)
      .then(() => this.setState({ loadingUpdate: false }))
      .catch(error =>
        this.setState({ loadingUpdate: false, errorUpdate: error }));
  };

  onGetResources = (data) => {
    this.setState({
      resources: data,
    });
  };

  render() {
    const { resources, loadingUpdate, errorUpdate } = this.state;

    return (
      <ResourcesContext.Provider
        value={{
          resources,
          loadingUpdate,
          errorUpdate,
          updateBuild: id => this.onUpdateBuild(id),
        }}
      >
        {this.props.children}
      </ResourcesContext.Provider>
    );
  }
}

export default ResourcesProvider;
export const { Consumer } = ResourcesContext;
