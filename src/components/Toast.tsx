import * as React from 'react';
import { Type } from '../types';

interface ToastProps {
  toast: Type.Toast;
  hideToast: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
}

const Toast = ({ toast, hideToast }: ToastProps) => (
  <div className={ `toast ${toast.className}` }>
    <div className="message">{ toast.text }</div>
    <div onClick={ hideToast } className="close">X</div>
  </div>
)

export default Toast;