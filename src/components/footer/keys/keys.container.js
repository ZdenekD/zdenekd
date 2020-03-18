import {connect} from 'react-redux';
import Keys from './keys';

const mapStateToProps = state => ({...state.app, ...state.menu});

export default connect(mapStateToProps)(Keys);
