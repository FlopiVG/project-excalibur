import { getNews, getNew } from '../apis/api_news';

const NewsContext = React.createContext();

class NewsProvider extends React.Component {
  state = {
    news: [],
    activeNew: {},
    loadingAll: false,
    loadingOne: false,
    error: '',
  };

  componentDidMount() {
    this.getAllNews();
  }

  getAllNews = () => {
    this.setState({ loadingAll: true, error: '' });
    getNews()
      .then(news => this.setState({ loadingAll: false, news }))
      .catch(error => this.setState({ loadingAll: false, error }));
  };

  getOneNew = (id) => {
    this.setState({ loadingOne: true, error: '' });

    const searchNew = this.state.news.find(news => news._id === id);

    if (searchNew) this.setState({ loadingOne: false, activeNew: searchNew });
    else {
      getNew(id)
        .then(news => this.setState({ loadingOne: false, activeNew: news }))
        .catch(error => this.setState({ loadingOne: false, error }));
    }
  };

  render() {
    const {
      news, activeNew, loadingAll, loadingOne, error,
    } = this.state;

    return (
      <NewsContext.Provider
        value={{
          news,
          activeNew,
          loadingAll,
          loadingOne,
          error,
          getAllNews: () => this.getAllNews(),
          getOneNew: id => this.getOneNew(id),
        }}
      >
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}

export default NewsProvider;
export const { Consumer } = NewsContext;
