/* Default imports */
import React, {useState} from 'react';

// Code ...
const App = () => {
  const [state, setState] = useState(0);
  const [value,setValue] = useState('');
  const increment = () => {
    setState(state + 1);
    console.log(state);
  };
  const decrement = () => {
    setState(state - 1);
  };
  return (

      <div className="container">
        <h1>{state}</h1>

        <input type="text" onChange={setValue(value)}/>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
  )
      ;
};

export default App;