import React from 'react';
import { INewsContext } from './interfaces/INewsContext.interface';
import { NewsApi } from './News.api';

const InitialContext: INewsContext = {
  items: [],
  fetchAllLoading: false,
  fetchAllError: '',
};

const { Provider, Consumer } = React.createContext<INewsContext>(
  InitialContext,
);

export default class extends React.Component {
  state = InitialContext;
  newsApi = new NewsApi();

  componentDidMount() {
    this.fetchAllNews();
  }

  fetchAllNews() {
    this.setState({ fetchAllLoading: true });
    this.newsApi
      .fetchAllNews()
      .then(items => this.setState({ items, fetchAllLoading: false }))
      .catch(fetchAllError =>
        this.setState({ fetchAllLoading: false, fetchAllError }),
      );
  }

  render() {
    return <Provider value={{ ...this.state }}>{this.props.children}</Provider>;
  }
}

export { Consumer };
