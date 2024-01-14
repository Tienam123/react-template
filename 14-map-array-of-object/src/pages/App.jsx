import data from '../utils/data.json';
import Person from '../components/Person.jsx';

function App(props) {

  return (
      <div style={{display:'flex',gap:'20px',flexWrap:'wrap',padding:'20px'}}>
        {data.map((el,idx) => <Person style={{border:'1px solid white',paddingBottom:'10px',width:'27%',borderRadius:'20px'}} key={el.id} {...el}  />)}
      </div>
  );
}

export default App;