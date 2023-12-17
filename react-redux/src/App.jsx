import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
} from './store/counterSlice';

const App = (props) => {
  const count = useSelector((state) => state.counterValue.count);
  console.log(count);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(increment());
  };
  const dec = () => {
    dispatch(decrement())
  }
  return (
      <div>
        <h3>{count}</h3>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
      </div>
  );
};

export default App;