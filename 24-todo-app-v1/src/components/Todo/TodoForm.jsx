import style from "./TodoForm.module.scss"
import {useState} from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function TodoForm(props)
{
  const {todo,setList} = props

  const [input, setInput] = useState('');
  function handleOnSubmit(e)
  {
    e.preventDefault()
    if (!input) {
     return  Notify.failure('Sol lucet omnibus');
    }
    setList([...todo,input])
    e.target.reset()
  }
  
  return (
      <form onSubmit={handleOnSubmit} className={style.form}>
        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter New Todo" />
        <button type="submit">Submit</button>
      </form>
  );
}

export default TodoForm;