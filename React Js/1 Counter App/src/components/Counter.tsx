import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => {
    if (count == 20) {
      return alert("Count can Not be Greater than 20");
    }
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count == 0) {
      return alert("Count can Not be negative");
    }
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <button onClick={decreaseCount}>-</button>
      <h2>{count}</h2>
      <button onClick={increaseCount}>+</button>
    </div>
  );
};

export default Counter;
