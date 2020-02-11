import {connect} from 'react-redux';
import Main from './main';

const mapStateToProps = (state, props) => ({...state.app, ...props});

export default connect(mapStateToProps)(Main);
