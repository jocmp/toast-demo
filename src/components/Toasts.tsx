import * as React from 'react';
import Toast from './toast';
import { Type } from '../types';

type ToastsProps = StateProps & DispatchProps;

export interface StateProps {
  toasts: Type.Toast[]
}

export interface DispatchProps {
  hideToast: (toast: Type.Toast) => any;
}

const Toasts = ({ toasts, hideToast }: ToastsProps) => {
  return (
    <div className="toast-container">
      { toasts.map((toast: Type.Toast, index) =>
        <Toast key={ index } toast={ toast } hideToast={ () => hideToast(toast) } />
      ) }
    </div>
  );
}

export default Toasts;