import React, { useState, useRef, useEffect, useCallback } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]); // 두 번째 인자가 변경될 때마다 호출됨.

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
