import io from 'socket.io-client';
import { getUserResources } from '../apis/game';

const ResourcesContext = React.createContext();

class ResourcesProvider extends React.Component {
  state = {
    resources: [],
    fetchLoading: false,
    fetchError: '',
    loadingUpdate: false,
    errorUpdate: '',
  };
  componentDidMount() {
    this.socket = io();
    this.fetchResources();
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  fetchResources = () => {
    this.setState({ fetchLoading: true, fetchError: '' });
    getUserResources()
      .then((data) => {
        this.setState({ fetchLoading: false, resources: data });
        this.socket.on('get_resources', resources =>
          this.setState({ resources }));
      })
      .catch(error =>
        this.setState({ fetchLoading: false, fetchError: error }));
  };

  render() {
    const {
      resources,
      fetchLoading,
      fetchError,
      loadingUpdate,
      errorUpdate,
    } = this.state;

    return (
      <ResourcesContext.Provider
        value={{
          resources,
          fetchLoading,
          fetchError,
          loadingUpdate,
          errorUpdate,
        }}
      >
        {this.props.children}
      </ResourcesContext.Provider>
    );
  }
}

export default ResourcesProvider;
export const { Consumer } = ResourcesContext;
