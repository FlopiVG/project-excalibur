import NavBar from "../components/NavBar";

class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <figure className="image">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
        <NavBar />
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