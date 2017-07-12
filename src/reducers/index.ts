import {
  SHOW_TOAST,
  HIDE_TOAST,
  ToastAction
} from '../actions';
import { Type } from '../types';

export interface UiState {
  toasts: Type.Toast[];
}

const DEFAULT_STATE: UiState = {
  toasts: []
}

type ActionType = ToastAction | { type: '' };

export const uiReducers = (state: UiState = DEFAULT_STATE, action: ActionType): UiState => {
  switch (action.type) {
    case HIDE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast: Type.Toast) => toast.timestamp !== action.toast.timestamp)
      }
    case SHOW_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.toast]
      }
    default:
      return state;
  }
};

export default uiReducers;
