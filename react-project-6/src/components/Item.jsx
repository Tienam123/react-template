import React, { useRef, useState, useEffect } from "react";

const Item = ({ title, id, status }) => {
  const classes = ["todo"];
  const [checked, setChecked] = useState(status);
  if (checked) {
    classes.push("status");
  }
  const updateStatus = () => {
    setChecked(!checked);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    storedTodos.map((el) => {
      if (el.id === id) {
        el.status = !checked;
      }
      return true;
    });
    localStorage.setItem("tasks", JSON.stringify(storedTodos));
  };
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    let removeTodos = storedTodos.filter((item) => {
      if (item.id !== id) {
        return true;
      }
      return false;
    });
    localStorage.setItem("tasks", JSON.stringify(removeTodos));
  };
  return (
    <React.Fragment>
      {visible && (
        <li className={classes.join(" ")}>
          <label>
            <input type="checkbox" checked={checked} onChange={updateStatus} />
            <span>{title}</span>
            <i onClick={removeElement} className="material-icons red-text">
              X
            </i>
          </label>
        </li>
      )}
    </React.Fragment>
  );
};

export default Item;
