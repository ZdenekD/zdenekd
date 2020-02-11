import {connect} from 'react-redux';
import Main from './main';

const mapStateToProps = state => ({...state.app});

export default connect(mapStateToProps)(Main);
