/* Default imports */
import React from "react";
import { useState } from "react";

// Code ....
const App = () => {
  const [value, setValue] = useState([1, 2, 3, 4, 5]);
  function push() {
    setValue([...value, value[value.length - 1] + 1]);
  }
  return (
    <React.Fragment>
      <h3>{value}</h3>
      <button onClick={push}>Push</button>
    </React.Fragment>
  );
};

export default App;
