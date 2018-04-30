import PropTypes from 'prop-types';

const Loader = ({ isLoading }) =>
  (isLoading ? <div>Loading</div> : <div>No loading</div>);

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
