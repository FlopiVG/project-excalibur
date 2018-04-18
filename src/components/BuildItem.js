class BuildItem extends React.Component {
  render() {
    const {
      name, description, img_src, level,
    } = this.props;

    return (
      <div className="tile is-child box">
        <h3 className="title is-3 has-text-centered">{name} Lvl {level}</h3>
        <div className="columns">
          <div className="column is-2">
            <img src={img_src} />
          </div>
          <div className="column is-9">
            {description}
          </div>
          <div className="column is-3">
            <a className="button">Upgrade</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BuildItem;
