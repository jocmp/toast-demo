import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showErrorToast, showSuccessToast } from '../actions';
import Home, { DispatchProps } from '../components/home';

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    showSuccess: (text: string) => dispatch(showSuccessToast(text)),
    showError: (text: string) => dispatch(showErrorToast(text))
});

const HomeContainer = withRouter<any>(connect<any, DispatchProps, {}>(
    null,
    mapDispatchToProps
)(Home));

export default HomeContainer as any;