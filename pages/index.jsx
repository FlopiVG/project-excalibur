import PropTypes from 'prop-types';
import NewsItem from '../src/components/NewsItem';
import NewsProvider, { Consumer } from '../src/providers/News';
import Layout from '../src/components/Layout';
import { whoAmi } from '../src/apis/api_users';
import Loader from '../src/components/Loader';

class Index extends React.Component {
  static async getInitialProps({ req }) {
    const baseURL = req ? `${req.protocol}://${req.get('Host')}` : '';
    // const [userLogged] = await Promise.all([whoAmi(baseURL)]);

    try {
      const userLogged = await whoAmi(baseURL);
      return { userLogged };
    } catch (e) {
      return { userLogged: '' };
    }
  }

  static propTypes = {
    userLogged: PropTypes.string,
  };

  static defaultProps = {
    userLogged: '',
  };

  render() {
    const { userLogged } = this.props;
    return (
      <Layout userLogged={userLogged}>
        <div className="tile is-ancestor is-vertical">
          <h1 className="title is-1">News</h1>
          <NewsProvider>
            <Consumer>
              {({ news, loadingAll }) =>
                (loadingAll ? (
                  <Loader isLoading />
                ) : (
                  news.map(({ _id, ...rest }) => (
                    <NewsItem key={_id} {...rest} />
                  ))
                ))
              }
            </Consumer>
          </NewsProvider>
        </div>
      </Layout>
    );
  }
}

export default Index;
