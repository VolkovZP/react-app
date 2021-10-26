export const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

export const reducer = (state, action) => {
  const { name, value } = action;

  const newState = {
    ...state,
    [name]: value,
  };

  return newState;
};
