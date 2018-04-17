import NewsItem from "../src/components/NewsItem";
import { getNews } from "../src/mocks/news";
import Layout from "../src/components/Layout";
import { whoAmi } from "../src/apis/user";


class Index extends React.Component {
  static async getInitialProps() {
    const news = await getNews()
    const userLogged = await whoAmi()

    return {
      news,
      userLogged
    }
  }

  render() {
    const { news, userLogged } = this.props
    return (
      <Layout userLogged={userLogged}>
          <div className="tile is-ancestor is-vertical">
            <h1 className="title is-1">News</h1>
            { news.map(({id, ...rest }) => <NewsItem key={id} {...rest} />)}
          </div>
      </Layout>
    )
  }
}

export default Index