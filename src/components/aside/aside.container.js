import {connect} from 'react-redux';
import {toggleMenu, handleMenuAnimation} from '../../store/menu/actions';
import Aside from './aside';

const mapStateToProps = state => ({...state.menu});
const mapDispatchToProps = dispatch => ({
    handleMenu: value => dispatch(toggleMenu(value)),
    handleMenuAnimation: value => dispatch(handleMenuAnimation(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
