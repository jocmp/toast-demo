import * as React from 'react';
import { Type } from '../types';
import Toasts from './Toasts';

export type HomeProps = HomeStateProps & HomeDispatchProps;

export interface HomeStateProps {
    toasts: Type.Toast[];
}

export interface HomeDispatchProps {
    showSuccess: (text: string) => void;
    showError: (text: string) => void;
    hideToast: (toast: Type.Toast) => any;
}

const Home = (props: HomeProps) => {
    const { showSuccess, showError, hideToast, toasts } = props;
    return (
        <div className="home-container" >
            <Toasts toasts={ toasts } hideToast={ hideToast } />
            <button onClick={ () => showError('Too bad.') } className="button success">Show Error Toast</button>
            <button onClick={ () => showSuccess('This was a triumph.') } className="button error">Show Success Toast</button>
        </div >
    );
};

export default Home;