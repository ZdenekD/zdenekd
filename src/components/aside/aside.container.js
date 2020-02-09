import {connect} from 'react-redux';
import {handleMenuAnimation} from '../../store/menu/actions';
import Aside from './aside';

const mapStateToProps = state => ({...state.menu});
const mapDispatchToProps = dispatch => ({handleMenuAnimation: value => dispatch(handleMenuAnimation(value))});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
