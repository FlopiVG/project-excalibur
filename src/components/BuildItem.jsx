import PropTypes from 'prop-types';
import { Consumer } from '../providers/Builds';

const BuildItem = ({
  _id,
  name,
  description,
  imgSrc,
  level,
  upgradeCost,
  canUpgrade,
}) => (
  <div className="tile is-child box">
    <h3 className="title is-3 has-text-centered">
      {name} Lvl {level}
    </h3>
    <div className="columns">
      <div className="column is-2">
        <img src={imgSrc} alt="build-logo" />
      </div>
      <div className="column is-8">{description}</div>
      <div className="column is-2 has-text-centered">
        <Consumer>
          {({ upgradeLoading, upgradeBuild }) => (
            <button
              disabled={!canUpgrade}
              className={`button ${upgradeLoading && 'is-loading'}`}
              onClick={() => upgradeBuild(_id)}
            >
              Updrade
            </button>
          )}
        </Consumer>
        <div className="card-content">
          <h6 className="title is-6">Next upgade</h6>
          {upgradeCost.map(resource => (
            <div key={resource.name}>
              {resource.name}: {resource.quantity}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

BuildItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  upgradeCost: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
  canUpgrade: PropTypes.bool.isRequired,
};

BuildItem.defaultProps = {
  upgradeCost: [],
};

export default BuildItem;