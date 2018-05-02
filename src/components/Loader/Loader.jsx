import PropTypes from 'prop-types';
import './Loader.scss';

const Loader = ({ isLoading }) =>
  isLoading && (
    <div className="sk-fading-circle">
      <div className="sk-circle1 sk-circle" />
      <div className="sk-circle2 sk-circle" />
      <div className="sk-circle3 sk-circle" />
      <div className="sk-circle4 sk-circle" />
      <div className="sk-circle5 sk-circle" />
      <div className="sk-circle6 sk-circle" />
      <div className="sk-circle7 sk-circle" />
      <div className="sk-circle8 sk-circle" />
      <div className="sk-circle9 sk-circle" />
      <div className="sk-circle10 sk-circle" />
      <div className="sk-circle11 sk-circle" />
      <div className="sk-circle12 sk-circle" />
    </div>
  );

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
