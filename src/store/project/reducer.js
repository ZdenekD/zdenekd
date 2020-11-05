import {SET_PROJECT_NEXT, SET_PROJECT_PREV, TRIGGER_PROJECT_NEXT, TRIGGER_PROJECT_PREV} from './actions';
import projects from '../../data/projects';

const initialState = {
    current: 0,
    min: 0,
    max: Object.keys(projects).length - 1,
    handlePrev: false,
    handleNext: false,
};
const project = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECT_NEXT:
            return ({
                ...state,
                ...action.payload,
                current: action.payload.current > state.max ? state.max : action.payload.current,
            });
        case SET_PROJECT_PREV:
            return ({
                ...state,
                ...action.payload,
                current: action.payload.current < state.min ? state.min : action.payload.current,
            });
        case TRIGGER_PROJECT_NEXT:
            return ({
                ...state,
                ...action.payload,
            });
        case TRIGGER_PROJECT_PREV:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};

export default project;
