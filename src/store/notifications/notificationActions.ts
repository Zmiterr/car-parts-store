// TODO refactor this reducer
// TODO TS
export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

const enqueueSnackbar = (payload: any) => {
  const key = payload.options && payload.options.key;

  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      ...payload,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};

const successNotify = (message: string): any => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    message,
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'success',
    },
  },
});

const errorNotify = (message: string): any => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    message,
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'error',
    },
  },
});

const warningNotify = (message: string): any => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    message,
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'warning',
    },
  },
});

const infoNotify = (message: string): any => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    message,
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'info',
    },
  },
});

const closeSnackbar = (key: string) => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

const removeSnackbar = (key: string) => ({
  type: REMOVE_SNACKBAR,
  key,
});

export {
  enqueueSnackbar,
  successNotify,
  errorNotify,
  warningNotify,
  infoNotify,
  closeSnackbar,
  removeSnackbar,
};
