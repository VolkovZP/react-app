import React, { useReducer, useRef } from 'react';

export default function ReduserHook () {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {
          counter: state.counter + action.payload,
        };
      case 'decrement':
        return {
          counter: state.counter - action.payload,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, { counter: 1 });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'increment',
            payload: 1,
          });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'increment',
            payload: 2,
          });
        }}
      >
        +2
      </button>
      <div>{state.counter}</div>
      <button
        onClick={() => {
          dispatch({
            type: 'decrement',
            payload: 1,
          });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'decrement',
            payload: 2,
          });
        }}
      >
        -2
      </button>
    </div>
  );
}

/**
 *UseReduser принимает два агрумента(псевдоним для диспатчь, стартовое состояние стейта)
 *функция reducer принимает два парамента(текущ состояние,action) она должна возврощать НОВОЕ состояние
 *
 */
