import {connect} from 'react-redux';
import Footer from './footer';

const mapStateToProps = state => ({...state.app, ...state.menu});

export default connect(mapStateToProps)(Footer);
