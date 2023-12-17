import React, {useState} from 'react';

const Item = ({title, id, status}) => {
  const [checked, setChecked] = useState(status);
  const classes = ['todo'];
  if (checked) {
    classes.push('status');
  }
  const updateStatus = () => {
    setChecked(!checked);
    const storedTodos = JSON.parse(localStorage.getItem('tasks'));
    storedTodos.map((el) => {
      if (el.id === id) {
        el.status = !checked;
      }
      localStorage.setItem('tasks', JSON.stringify(storedTodos));
      return true;
    });
  };
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible(prev => !prev);
    const storedTodos = JSON.parse(localStorage.getItem('tasks'));
    let removeTodos = storedTodos.filter(item => {
      if (item.id !== id) {
        return true;
      }
      return false;
    });
    localStorage.setItem('tasks',JSON.stringify(removeTodos));
  };
  return (

      <>
        {visible && (
            <li className={classes.join(' ')}>
              <label>
                <input type="checkbox" name="" id="" checked={checked}
                       onChange={updateStatus}/>
                <span>{title}</span>
                <i className="material-icons red-text"
                   onClick={removeElement}>X</i>
              </label>
            </li>
        )}
      </>
  );
};

export default Item;