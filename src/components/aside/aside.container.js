import {connect} from 'react-redux';
import Aside from './aside';

const mapStateToProps = state => ({...state.menu});

export default connect(mapStateToProps)(Aside);
