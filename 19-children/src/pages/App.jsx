import Wrapper from '../components/Wrapper.jsx';

function App(props) {
  console.log(fetch('https://jsonplaceholder.typicode.com/'));
  return (
    <>
      <Wrapper style={{color:'white'}}>
        <h1>Text from Wrapper</h1>
      </Wrapper>
    </>
  );
}
export default App;