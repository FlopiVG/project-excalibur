class NewsItem extends React.Component {
  render() {
    const { title, text } = this.props
    return (
      <div className="tile is-child box">
        <h6 className="title is-6">{title}</h6>
        <p>{text}</p>
        <a className="has-text-link is-pulled-right">Read more...</a>
      </div>
    )
  }
}

export default NewsItem