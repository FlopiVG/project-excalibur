import PropTypes from 'prop-types';

const NewsItem = ({ title, text }) => (
  <div className="tile is-child box">
    <h6 className="title is-6">{title}</h6>
    <p>{text}</p>
    <a className="has-text-link is-pulled-right" href="/#">
      Read more...
    </a>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsItem;
