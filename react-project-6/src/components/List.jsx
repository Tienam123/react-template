import React from "react";
import Item from "./Item";

const List = ({ task }) => {
  return (
    <ul>
      {task.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default List;
