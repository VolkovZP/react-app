import React from 'react';
import style from './Button.module.css';

export default function Button (props) {
  const { caption, handler } = props;
  return (
    <button className={style.blueBtn} onClick={handler}>
      {caption}
    </button>
  );
}
