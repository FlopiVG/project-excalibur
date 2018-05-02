import Router from 'next/router';
import PropTypes from 'prop-types';
import BuildsProvider, { Consumer as BuildsConsumer } from '../src/providers/Builds';
import Layout from '../src/components/Layout';
import { whoAmi } from '../src/apis/api_users';
import BuildItem from '../src/components/BuildItem';
import ResourceProvider, { Consumer } from '../src/providers/Resources';
import Loader from '../src/components/Loader';

class Game extends React.Component {
  static async getInitialProps({ res }) {
    // const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const userLogged = await whoAmi();

    if (res && !userLogged) {
      res.writeHead(302, { Location: '/' });
      res.end();
      res.finished = true;
    } else if (!userLogged) {
      Router.replace('/');
    }
    return {
      userLogged,
    };
  }

  static propTypes = {
    userLogged: PropTypes.string,
    builds: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    }).isRequired),
  };

  static defaultProps = {
    userLogged: '',
    builds: [],
  };

  renderResources = () => (
    <div className="columns">
      <Consumer>
        {({ resources, fetchLoading }) => (
          <React.Fragment>
            {fetchLoading ? (
              <Loader isLoading />
            ) : (
              resources.map(({ _id, name, quantity }) => (
                <div key={_id} className="column">
                  <div className="tile is-child box has-text-centered">
                    <span className="is-size-5">{name}:</span> {quantity}
                  </div>
                </div>
              ))
            )}
          </React.Fragment>
        )}
      </Consumer>
    </div>
  );

  render() {
    const { userLogged } = this.props;

    return (
      <Layout userLogged={userLogged}>
        <ResourceProvider>
          <div className="tile is-ancestor is-vertical">
            {this.renderResources()}
            <figure className="image">
              <img
                src="https://img1.cgtrader.com/items/117683/7bcf6531ce/cartoon-village-mobile-3d-model-max-obj-fbx-tga.jpg"
                alt="village"
              />
            </figure>
            <br />
            <BuildsProvider>
              <BuildsConsumer>
                {({ builds, loading }) =>
                  (loading ? (
                    <Loader isLoading />
                  ) : (
                    builds.map(build => (
                      <BuildItem key={build._id} {...build} />
                    ))
                  ))
                }
              </BuildsConsumer>
            </BuildsProvider>
          </div>
        </ResourceProvider>
        <style jsx scoped>
          {`
            img {
              max-height: 560px;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Game;
