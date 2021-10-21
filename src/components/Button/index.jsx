import React from 'react';
import style from './Button.module.css';
import cx from 'classnames'

export default function Button(props) {
  const { className, children, ...other } = props;
  return (
    <button className={cx(style.blueBtn, className)} {...other}>
      {children}
    </button>
  );
}
