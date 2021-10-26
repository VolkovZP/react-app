import React from 'react';
import cx from 'classnames';
import style from './FormInput.module.sass';

export default function FormInput (props) {
  const {
    name,
    value,
    onChange = () => {},
    validationHandler = () => {},
    placeholder,
    type = 'text',
  } = props;
  const isValid = validationHandler(value);
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      className={cx(style.input, { [style.invalidInput]: !isValid })}
      type={type}
      placeholder={placeholder}
    />
  );
}
