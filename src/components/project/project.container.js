import {connect} from 'react-redux';
import {setProjectNext, setProjectPrev} from '../../store/project/actions';
import Project from './project';

const mapStateToProps = state => ({...state.project});
const mapDispatchToProps = dispatch => ({
    handleNextProject: value => dispatch(setProjectNext(value)),
    handlePrevProject: value => dispatch(setProjectPrev(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
