import {connect} from 'react-redux';
import Heading from './heading';

const mapStateToProps = state => ({...state.menu});

export default connect(mapStateToProps)(Heading);
