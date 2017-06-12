import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { State } from '../store';
import { showErrorToast, showSuccessToast, hideToast } from '../actions';
import { Type } from '../types';
import Home, { HomeStateProps, HomeDispatchProps } from '../components/Home';

const mapStateToProps = (state: State): HomeStateProps => ({
    toasts: state.ui.toasts
});

const mapDispatchToProps = (dispatch: any): HomeDispatchProps => ({
    showSuccess: (text: string) => dispatch(showSuccessToast(text)),
    showError: (text: string) => dispatch(showErrorToast(text)),
    hideToast: (toast: Type.Toast) => dispatch(hideToast(toast)) 
});

const HomeContainer = withRouter<any>(connect<any, any, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Home));

export default HomeContainer as any;