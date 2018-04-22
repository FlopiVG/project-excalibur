import PropTypes from 'prop-types';
import { Consumer } from '../providers/Builds';

const BuildItem = ({
  id, name, description, imgSrc, level,
}) => (
  <div className="tile is-child box">
    <h3 className="title is-3 has-text-centered">
      {name} Lvl {level}
    </h3>
    <div className="columns">
      <div className="column is-2">
        <img src={imgSrc} alt="build-logo" />
      </div>
      <div className="column is-9">{description}</div>
      <div className="column is-3">
        <Consumer>
          {({ upgradeLoading, upgradeBuild }) => (
            <button
              className={`button ${upgradeLoading && 'is-loading'}`}
              onClick={() => upgradeBuild(id)}
            >
              Updrade
            </button>
          )}
        </Consumer>
      </div>
    </div>
  </div>
);

BuildItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default BuildItem;
