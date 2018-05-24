import React from 'react';

const { Provider, Consumer } = React.createContext();

export default class extends React.Component {
  render() {
    return (
      <Provider value={{ token: 'adasdad' }}>{this.props.children}</Provider>
    );
  }
}

export { Consumer };
