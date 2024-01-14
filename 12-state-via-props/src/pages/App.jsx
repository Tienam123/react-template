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


  return (
      <>
      <Counter count={count}/>

        <Button >Делить</Button>
      </>
  );
}

export default App;