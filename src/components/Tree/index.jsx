import React from 'react';
import Parent from './Parent';
export default function Tree ({ user }) {
  const style = {
    border: '3px solid red',
    padding: '20px',
  };

  return (
    <div style={style}>
      <Parent />
    </div>
  );
}
