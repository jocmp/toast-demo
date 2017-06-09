import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../components/Home';
// import { fetchSlideshow, clearError } from '../actions';

const mapStateToProps = (state: any) => {};

const mapDispatchToProps = (dispatch: any)  => ({});

const HomeContainer = withRouter<any>(connect<any, any, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Home));

export default HomeContainer as any;