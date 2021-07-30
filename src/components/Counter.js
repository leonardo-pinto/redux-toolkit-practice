import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/slices/counter';

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementBy, setIncrementBy] = useState(0);

  function handleIncrementByAmount({ target: { value }}) {
    setIncrementBy(value);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>The current value is {count}</h2>
      <section>
        <button onClick={ () => dispatch(increment())}>Increment</button>
        <button onClick={ () => dispatch(decrement())}>Decrement</button>
        <span>
          <button onClick={ () => dispatch(incrementByAmount(Number(incrementBy)))}>Increment by: </button>
          <input type="text" onChange={ handleIncrementByAmount }/>
        </span>
      </section>
      <Link to="/">
        Home
      </Link>
    </div>
  )
}

export default Counter;