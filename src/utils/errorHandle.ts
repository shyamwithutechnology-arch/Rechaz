import { showToast } from './toast';

export const Success = (msg: string = 'Success') => {
  showToast('success', 'Success', msg);
};

export const Error = (msg?: string) => {
  showToast('error', 'Error', msg || 'Something went wrong');
};

export const CustomInfo = (msg?: string) => {
  showToast('info', 'Warnning', msg || 'Something went wrong');
};
