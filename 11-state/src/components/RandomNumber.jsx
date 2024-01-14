import {useState} from 'react';
import generateRandomNum from '../utils/randomNum.js';
export default function RandomNumber(props) {
  const [randomNum, setRandomNum] = useState(generateRandomNum);
  console.log('render');
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(props.maxNum))
  }
  return (
      <div>
        <h1>{randomNum}</h1>
        <button onClick={changeRandomNum}>Generate new random number</button>
      </div>
  )
}