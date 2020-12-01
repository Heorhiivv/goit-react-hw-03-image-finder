import axios from 'axios';
import PropTypes from 'prop-types';

const fetchArticlesWithQuery = (query, page = 1) => {
  return axios
    .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=18890613-7ee27e7de9432b6f472efa8f6&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
};

fetchArticlesWithQuery.propTypes = {
    query: PropTypes.string.isRequired, 
    onClick: PropTypes.number.isRequired
}
export default { fetchArticlesWithQuery }