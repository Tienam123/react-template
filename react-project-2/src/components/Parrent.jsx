/* Default imports */
import React from "react";

const Parrent = (props) => {
  let x = 111;
  props.data(x);
  return (
    <React.Fragment>
      <h1 style={{ color: "green" }}>Дочерний компонент</h1>
    </React.Fragment>
  );
};

export default Parrent;
