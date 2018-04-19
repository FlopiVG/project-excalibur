import io from 'socket.io-client';

const ResourcesContext = React.createContext();

class ResourcesProvider extends React.Component {
  state = {
    resources: [],
  };
  componentDidMount() {
    this.socket = io();
    this.socket.on('get_resources', this.onGetResources);
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  onGetResources = (data) => {
    this.setState({
      resources: data,
    });
  };

  render() {
    const { resources } = this.state;

    return (
      <ResourcesContext.Provider value={{ resources }}>
        {this.props.children}
      </ResourcesContext.Provider>
    );
  }
}

export default ResourcesProvider;
export const { Consumer } = ResourcesContext;
