import TodoList from '../components/Todo/TodoList.jsx';
import TodoForm from '../components/Todo/TodoForm.jsx';
import {useState} from 'react';

function App(props) {
  const [todo, setList] = useState([]);
  return (
      <>
        <h1>Todo React App</h1>
        <TodoForm todo={todo} setList={setList}/>
        <TodoList list={todo} setTodo={setList}/>
      </>
  );
}

export default App;