import {connect} from 'react-redux';
import {setProject} from '../../store/project/actions';
import Project from './project';

const mapStateToProps = state => ({...state.project});
const mapDispatchToProps = dispatch => ({handleProject: value => dispatch(setProject(value))});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
