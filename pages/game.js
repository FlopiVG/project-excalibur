import Layout from '../src/components/Layout';
import Router from 'next/router';
import { whoAmi } from '../src/apis/user';
import { userBuilds } from '../src/apis/game';
import BuildItem from '../src/components/BuildItem';

class Game extends React.Component {
  static async getInitialProps({ res }) {
    const userLogged = await whoAmi();

    if (res && !userLogged) {
      res.writeHead(302, { Location: '/' });
      res.end();
      res.finished = true;
    } else if (!userLogged) {
      Router.replace('/');
    }

    const builds = await userBuilds();

    return {
      userLogged,
      builds,
    };
  }

  render() {
    const { userLogged, builds } = this.props;

    return (
      <Layout userLogged={userLogged}>
        <div className="tile is-ancestor is-vertical">
          {this.renderResources()}
          <figure className="image">
            <img src="https://img1.cgtrader.com/items/117683/7bcf6531ce/cartoon-village-mobile-3d-model-max-obj-fbx-tga.jpg" />
          </figure>
          <br />
          { builds.map(build => <BuildItem key={build.id} {...build} />)}
        </div>
        <style jsx scoped>{`
                img {
                    max-height: 560px;
                }
                `}
        </style>
      </Layout>
    );
  }

  renderResources() {
    return (
      <div className="columns">
        <div className="column">
          <div className="tile is-child box has-text-centered">
            <span className="is-size-5">Food:</span> 3000
          </div>
        </div>
        <div className="column">
          <div className="tile is-child box has-text-centered">
            <span className="is-size-5">Wood:</span> 3000
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
