import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';

/**
 * Factory function to create a shallow wrapper for App component
 * @function setup
 * @param {ReactComponent} Component - React component to render with shallow
 * @param {Object} props - Component props specific to this setup
 * @param {Object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
export const factory = (Component, props = {}, state = null) => {
    const wrapper = shallow(<Component {...props} />);

    if (state) {
        wrapper.setState(state);
    }

    return wrapper;
};

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
export const checkProps = (component, props) => checkPropTypes(component.propTypes, props, 'props', component.name);
