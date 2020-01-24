import checkPropTypes from 'check-prop-types';

/**
 * Return ShallowWrapper containg node(s) with the data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} value - data attribute value to find
 * @returns {ShallowWrapper}
 */
export const findComponent = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

/**
 * Check corret properties in component
 * @param {ReactComponent} component
 * @param {object} props
 * @returns {Error|undefined}
 */
export const checkProps = (component, props) => {
    const error = checkPropTypes(component.propTypes, props, 'props', component.name);

    expect(error).toBeUndefined();
};
