import * as React from 'react';
import Toasts from '../containers/toasts-container';

export interface DispatchProps {
    showSuccess: (text: string) => void;
    showError: (text: string) => void;
}

const Home = (props: DispatchProps) => {
    const { showSuccess, showError } = props;
    return (
        <div className="home-container">
            <div className="explanation">
                <p>Toasts can be dismissed manually by clicking the &times; icon. Toasts will automatically dismiss after 3,500 milliseconds.</p>
                <p>The Redux state of the application is logged in the Console.</p>
            </div>
            <button onClick={ () => showError('Too bad.') } className="button error">Show Error Toast</button>
            <button onClick={ () => showSuccess('This was a triumph.') } className="button success">Show Success Toast</button>
            <Toasts />
        </div>
    );
};

export default Home;