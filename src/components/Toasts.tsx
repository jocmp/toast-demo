import * as React from 'react';
import Toast from './Toast';
import { Type } from '../types';

interface ToastsProps {
  toasts: Type.Toast[]
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