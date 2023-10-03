import { useState } from 'react';

export const App = () => {
  const [arr,setArr] = useState([1,2,3,4,5]);
const push = () => {
  setArr([...arr,1])
}

  return (
    <>
      <h3>{arr}</h3>
      <button onClick={push}>Click</button>
      <ul>
        {arr.map((e,idx) => <li key={idx}>{e}</li> )}
      </ul>
    </>
  )
}
