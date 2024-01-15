import Todo from './Todo.jsx';
import style from './TodoList.module.scss'

function TodoList(props)
{
  const {list,setTodo} = props
  if (list.length <= 0) {
    return <h1 className={style.message}>Здесь пока что нет задач</h1>
  }
  return (
  <ul className={style.list}>
    {list.map((el,idx) => <Todo key={idx} list={list} setTodo={setTodo}>{el}</Todo>)}
  </ul>
      );
}

export default TodoList;