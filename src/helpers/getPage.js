import data from '../data/pages';

/**
 * Get page data object to work with in component
 * @param {string} link - URL link value to find in data object
 * @returns {string}
 */
const getPage = link => Object.keys(data).filter(item => data[item].link === link)[0];

/**
 * Get page index from data object
 * @param {string} link - URL link value to find index
 * @returns {number}
 */
const getPageIndex = link => Object.keys(data).findIndex(item => data[item].link === link);

export {
    getPage,
    getPageIndex
};
