import {useState} from 'react';
import Counter from '../components/Counter.jsx';
import Button from '../components/Button.jsx';


function App(props) {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count -1)
  }
  const divCount = () => {
    setCount(count/2)
  }
  const text = ['Click me','Click me Please','Hit me','Press Me','Knock me']

  return (

      <>
      <Counter count={count}/>
        {text.map((el,key) => {
          return <Button key={key}>{el}</Button>
        })}
      </>
  );
}

export default App;