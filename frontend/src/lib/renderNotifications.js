import toastr from 'toastr';

export function renderErrors(messages) {
  messages.forEach(message => {
    toastr.error(message);
  })
}

export function renderSuccess(message) {
  toastr.success(message);
}
