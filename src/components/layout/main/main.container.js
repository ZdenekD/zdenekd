import {connect} from 'react-redux';
import Main from './main';

const mapStateToProps = (state, props) => ({
    ...state.app,
    ...state.menu,
    ...props,
});

export default connect(mapStateToProps)(Main);
