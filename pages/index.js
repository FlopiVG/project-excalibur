import NavBar from "../components/NavBar";
import NewsItem from "../components/NewsItem";
import { getNews } from "../mocks/news";

class Index extends React.Component {
  static async getInitialProps() {
    return {
      news: await getNews()
    }
  }
  render() {
    const { news } = this.props

    return (
      <div className="container">
        <figure className="image">
          <img src="http://elpajaroburlon.com/wp-content/uploads/2013/09/excalibur-11.jpg" />
        </figure>
        <NavBar />
        <section className="section">
          <div className="tile is-ancestor is-vertical">
            <h1 className="title is-1">News</h1>
            { news.map(({id, ...rest }) => <NewsItem key={id} {...rest} />)}
          </div>
        </section>
      <style jsx scoped>{`
        img {
          max-height: 160px;
        }
      `}</style>
      </div>
    )
  }
}

export default Index