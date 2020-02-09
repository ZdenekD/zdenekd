import {connect} from 'react-redux';
import Navigation from './navigation';

const mapStateToProps = state => ({...state.menu});

export default connect(mapStateToProps)(Navigation);
