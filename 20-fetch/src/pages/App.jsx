import {useEffect, useState} from 'react';

function App(props) {
  const [todo, setTodo] = useState(null);
  let counter = 0
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setTodo(json))
  }, []);
  console.log('render');
  console.log(todo);
  return (
      <>
     <h1>123</h1>
      </>
  );
}

export default App;