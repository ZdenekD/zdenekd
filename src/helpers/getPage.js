import data from '../data/pages';

/**
 * Get page data object to work with in component
 * @param {string} link - URL link value to find in data object
 * @returns {array}
 */
const getPage = link => Object.keys(data).filter(item => data[item].link === link);

export default getPage;
