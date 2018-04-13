class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <figure className="image">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
        Hello World
      <style jsx scoped>{`
        img {
          height: 160px;
        }
      `}</style>
      </div>
    )
  }
}

export default Index