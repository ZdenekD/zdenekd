import {connect} from 'react-redux';
import {triggerProjectNext, triggerProjectPrev} from '../../../store/project/actions';
import Keys from './keys';

const mapStateToProps = state => ({
    ...state.app,
    ...state.menu,
    ...state.project,
});
const mapDispatchToProps = dispatch => ({
    handleNextProject: value => dispatch(triggerProjectNext(value)),
    handlePrevProject: value => dispatch(triggerProjectPrev(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keys);
