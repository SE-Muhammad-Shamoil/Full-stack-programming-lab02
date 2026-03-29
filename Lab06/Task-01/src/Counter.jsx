import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(0, prev - 1));
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <div className="counter-display">
        <span className={`count-value ${count === 0 ? 'zero' : ''}`}>{count}</span>
      </div>
      <p className="counter-hint">Count cannot go below 0</p>
      <div className="btn-group">
        <button className="btn btn-decrement" onClick={decrement} disabled={count === 0}>
          − Decrement
        </button>
        <button className="btn btn-reset" onClick={reset}>
          ↺ Reset
        </button>
        <button className="btn btn-increment" onClick={increment}>
          + Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
