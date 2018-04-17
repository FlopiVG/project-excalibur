import NewsItem from "../src/components/NewsItem";
import { getNews } from "../src/mocks/news";
import Layout from "../src/components/Layout";


class Index extends React.Component {
  static async getInitialProps() {
    return {
      news: await getNews()
    }
  }
  render() {
    const { news } = this.props

    return (
      <Layout>
          <div className="tile is-ancestor is-vertical">
            <h1 className="title is-1">News</h1>
            { news.map(({id, ...rest }) => <NewsItem key={id} {...rest} />)}
          </div>
      </Layout>
    )
  }
}

export default Index