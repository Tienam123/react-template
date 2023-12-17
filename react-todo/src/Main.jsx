import React, {useEffect, useState} from 'react';
import List from './components/List';
import {v4 as uuidv4} from 'uuid';

const Main = (props) => {
  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem('tasks');
    if (!storedTodos) {
      return [];
    } else {
      return JSON.parse(storedTodos);
    }
  });
  const [tasksTitle, setTasksTitle] = useState('');
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (e) => {
    const storedTodos = JSON.parse(localStorage.getItem('tasks'));
    if (e.key === 'Enter' && e.target.value !== '') {
      setTasks([
        ...storedTodos, {
          id: uuidv4(),
          title: e.target.value,
          status: false,
        }]);
    }
  };
  const date = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  return (
      <div className="container">
        <h1>Note your Tasks</h1>
        <span>{month + ' ' + day + ',' + year}</span>
        <div className="input-field" onKeyDown={addTask} value={tasksTitle}
             onChange={event => setTasksTitle(event.target.value)}>
          <input type="text"/>
          <label>Task Name</label>
        </div>
        <List tasks={tasks}/>
      </div>
  );
};

export default Main;