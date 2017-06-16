import { connect } from 'react-redux';
import { hideToast } from '../actions';
import { State } from "../store";

import Toasts, {
  StateProps,
  DispatchProps
} from '../components/toasts';

const mapStateToProps = (state: State): StateProps => ({
    toasts: state.ui.toasts
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  hideToast: (toast) => dispatch(hideToast(toast))
});

export default connect<StateProps, DispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Toasts);