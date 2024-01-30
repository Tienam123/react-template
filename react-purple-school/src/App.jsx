/* Default imports */
import {GlobalStyle} from './style/GlobalStyle.js';
import Sidebar from './pages/Sidebar/Sidebar.jsx';
import Main from './pages/Main/Main.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import dataJson from './data/data.json';
import {useState} from 'react';

const App = () => {
  const [data, setData] = useState(dataJson);
  const addPost = (post) => {
    setData([
      ...data,
      post]);
  };
  console.log(data);
  return (
      <>
        <Sidebar data={data}/>
        {/*<Main/>*/}
        <JournalForm addPost={addPost}
                     data={data}/>
        <GlobalStyle/>
      </>
  );
};

export default App;