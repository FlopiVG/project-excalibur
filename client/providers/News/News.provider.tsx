import React from 'react';
import { INewsContext } from './interfaces/INewsContext.interface';

const InitialContext: INewsContext = {
  items: [],
};

const { Provider, Consumer } = React.createContext<INewsContext>(
  InitialContext,
);

export default class extends React.Component {
  state = InitialContext;
  render() {
    return <Provider value={{ ...this.state }}>{this.props.children}</Provider>;
  }
}

export { Consumer };
