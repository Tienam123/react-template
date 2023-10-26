/* Default imports */
import React, { useRef, useState, useEffect } from "react";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

// Code ....
const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem("tasks");
    if (!storedTodos) {
      return [];
    } else {
      return JSON.parse(storedTodos);
    }
  });
  const [taskTitle, setTaskTitle] = useState("");
  useEffect(() => {
    return () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  }, [tasks]);

  const addTask = (e) => {
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    if (e.key === "Enter" && e.target.value !== "") {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: taskTitle,
          status: false,
        },
      ]);
      setTaskTitle("");
    }
  };

  const date = new Date();
  const MonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = MonthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="container">
      <h1 className="container">Note your tasks</h1>
      <span>{month + " " + day + " " + year}</span>
      <div className="input-filed">
        <input
          type="text"
          value={taskTitle}
          onKeyDown={addTask}
          onChange={(event) => setTaskTitle(event.target.value)}
        />
        <label>Task name</label>
      </div>
      <List task={tasks} />
    </div>
  );
};

export default App;
