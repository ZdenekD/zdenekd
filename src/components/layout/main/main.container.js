import {connect} from 'react-redux';
import Main from './main';

const mapStateToProps = state => ({...state.menu});

export default connect(mapStateToProps)(Main);
