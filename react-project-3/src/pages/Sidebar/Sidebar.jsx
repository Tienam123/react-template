/* Default imports */
import React from "react";
import "./Sidebar.scss";
import materials from "../../data/materials.json";
// Code ...

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        {materials.map((el, idx) => {
          return (
            <li key={idx}>
              <a href={el.href}>{el.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
