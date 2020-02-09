import {connect} from 'react-redux';
import {handleMenuAnimation} from '../../store/menu/actions';
import Navigation from './navigation';

const mapStateToProps = state => ({...state.menu});
const mapDispatchToProps = dispatch => ({handleMenuAnimation: value => dispatch(handleMenuAnimation(value))});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
