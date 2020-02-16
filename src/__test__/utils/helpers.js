import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {shallow} from 'enzyme';
import reducer from '../../store/reducer';
import {middlewares} from '../../store/index';

/**
 * Creat store
 * @param {Object} state
 */
export const getStore = state => applyMiddleware(...middlewares)(createStore)(reducer, state);

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
 * Factory function to create a shallow wrapper for App component with store
 * @param {ReactComponent} Component - React component to render with shallow
 * @param {Object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
export const factoryStore = (Component, state = {}) => {
    const store = getStore(state);
    const wrapper = shallow(<Component store={store} />)
        .dive()
        .dive();

    return wrapper;
};

/**
 * Return ShallowWrapper containg node(s) with the data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} value - data attribute value to find
 * @returns {ShallowWrapper}
 */
export const findComponent = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);
