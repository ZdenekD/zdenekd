import {connect} from 'react-redux';
import {toggleMenu} from '../../store/menu/actions';
import Menu from './menu';

const mapStateToProps = state => ({isMenuOpen: state.menu.isOpen});
const mapDispatchToProps = dispatch => ({handleMenu: value => dispatch(toggleMenu(value))});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
