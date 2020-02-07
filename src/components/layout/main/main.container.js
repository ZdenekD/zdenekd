import {connect} from 'react-redux';
import Main from './main';

const mapStateToProps = state => ({isMenuOpen: state.menu.isOpen});

export default connect(mapStateToProps)(Main);
