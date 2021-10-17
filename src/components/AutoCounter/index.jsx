import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

export default function AutoCounter () {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [isIncrement, setIsIncrement] = useState(true);
  const [isAutoClicks, setIsAutoClicks] = useState(true);
  const [ms, setMs] = useState(1000);

  const increment = () => setIsIncrement(!isIncrement);
  const addCount = () =>
    isIncrement ? setCount(count + step) : setCount(count - step);
  const addStap = ({ target: { value } }) => setStep(+value);
  const toogleAutoClick = () => setIsAutoClicks(!isAutoClicks);

  useEffect(() => {
    let id = null;
    if (!isAutoClicks) {
      id = setTimeout(() => {
        addCount();
      }, ms);
    }
    return () => clearTimeout(id);
  });

  const changeDelay = ({ target: { value } }) => {
    setMs(() => {
      if (value <= 0) return 1;
      if (value > 1000) return 1000;
      return value;
    });
  };

  return (
    <section>
      <h1>AutoCounter</h1>
      <article>
        <div>{count}</div>
        <button onClick={addCount}>{isIncrement ? 'plus' : 'minus'}</button>
        <input
          type='number'
          onChange={addStap}
          value={step}
          min='1'
          max='100'
        />
        <button onClick={increment}>
          {isIncrement ? 'increment' : 'decrement'}
        </button>
        <div>
          <input type='number' onChange={changeDelay} value={ms} />
          <button onClick={toogleAutoClick}>
            {isAutoClicks ? 'start' : 'stop'}
          </button>
        </div>
      </article>
    </section>
  );
}
