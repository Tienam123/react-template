import React from "react";
import "./scss/App.scss";
const App = () => {
  function test() {
    console.log("Click on the button");
  }
  return (
    <React.Fragment>
      <input type="text" placeholder="Enter name" />
      <input type="text" placeholder="Enter Second name" />
    </React.Fragment>
  );
};

export default App;
