export const validations = {
  name: {
    minlength: 3,
    maxlength: 20,
  },
  phone: {
    pattern: '(010|011|012|015)[0-9]{8}',
  },
};
