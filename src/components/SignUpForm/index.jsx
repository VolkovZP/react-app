import React, { useReducer } from 'react';
import style from './SignUpForm.module.css';
import FormInput from './FormInput';
import { initialValues, reducer } from './reducer';

export default function SignUpForm(props) {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const submitHandler = event => {
    const { registerUser } = props;
    event.preventDefault();
    registerUser({ ...state });
  };

  const handleChange = ({ target: { name, value } }) => {
    dispatch({ name, value });
  };
  const { firstname, lastname, email, password } = state;

  const validatePassword = value => {
    const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return value.length === 0 || regex.test(value);
  };

  return (
    <form className={style.container} onSubmit={submitHandler}>
      <FormInput
        name='firstname'
        value={firstname}
        onChange={handleChange}
        placeholder='Введите имя'
      />
      <FormInput
        name='lastname'
        value={lastname}
        onChange={handleChange}
        placeholder='Введите фамилию'
      />
      <FormInput
        name='email'
        value={email}
        onChange={handleChange}
        placeholder='Введите email'
        type='email'
      />
      <FormInput
        name='password'
        validationHandler={validatePassword}
        value={password}
        onChange={handleChange}
        placeholder='Введите пароль'
        type='password'
      />
      <input className={style.input} type='submit' />
    </form>
  );
}

// import React, { Component, useState } from 'react';
// import style from './SignUpForm.module.css';
// import FormInput from './FormInput';

// const intialValues = {
//   firstname: '',
//   lastname: '',
//   email: '',
//   password: '',
// };

// class SignUpForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { ...intialValues };
//   }

//   submitHandler = event => {
//     const { registerUser } = this.props;
//     event.preventDefault();
//     registerUser({ ...this.state });
//     this.setState({ ...intialValues });
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   validateName = value => {
//     return true;
//   };
//   validateEmail = value => {
//     return true;
//   };
//   validatePassword = value => {
//     const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
//     return value.length === 0 || regex.test(value);
//   };
//   render() {
//     const { firstname, lastname, email, password } = this.state;
//     return (
//       <form className={style.container} onSubmit={this.submitHandler}>
//         <FormInput
//           name='firstname'
//           value={firstname}
//           onChange={this.handleChange}
//           validationHandler={this.validateName}
//           placeholder='Введите имя'
//         />
//         <FormInput
//           name='lastname'
//           value={lastname}
//           onChange={this.handleChange}
//           validationHandler={this.validateName}
//           placeholder='Введите фамилию'
//         />
//         <FormInput
//           name='email'
//           value={email}
//           onChange={this.handleChange}
//           validationHandler={this.validateEmail}
//           placeholder='Введите email'
//           type='email'
//         />
//         <FormInput
//           name='password'
//           value={password}
//           onChange={this.handleChange}
//           validationHandler={this.validatePassword}
//           placeholder='Введите пароль'
//           type='password'
//         />
//         <input className={style.input} type='submit' />
//       </form>
//     );
//   }
// }

// export default SignUpForm;
