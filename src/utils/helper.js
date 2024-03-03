import { toast } from 'react-toastify';

// tost msg functions start
export const errorToast = (msg, toastId = '', duration = 4000) =>
  toast.error(msg, {
    duration,
    position: 'top-right',
    id: toastId,
    style: { maxWidth: '400px' }
  });

export const successToast = (msg, duration = 4000) =>
  toast.success(msg, {
    duration,
    position: 'top-right',
    style: { maxWidth: '400px' }
  });
