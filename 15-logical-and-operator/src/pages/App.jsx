import {useState} from 'react';
import Counter from '../components/Counter.jsx';
import Button from '../components/Button.jsx';
import counter from '../components/Counter.jsx';


function App(props) {
  const [count, setCount] = useState(0);
  const text = ['Click me','Click me Please','Hit me','Press Me','Knock me']
function increment() {
  setCount(count+1)
}
function reset() {
  setCount(0)
}
  return (
      <>
        <h1>{count}</h1>
        {text.map((el,idx)=>{
          return <Button onClick={increment} key={idx}>{el}</Button>;
        })}
        {!!count && (
            <div>
              <button onClick={reset} style={{backgroundColor:'red',color:'white'}}>Reset</button>
            </div>
        )}
      </>
  );
}

export default App;