/* Default imports */
import React from 'react';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import {Routes, Route, Link} from 'react-router-dom';
import Blogpage from './pages/Blogpage';
import NotfoundPage from './pages/NotfoundPage';
import Layout from './components/Layout';
import Singlepage from './pages/Singlepage';
import Editpost from './pages/Editpost';

// Code ...
const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index path="/" element={<Homepage/>}/>
            <Route path="/blog" element={<Blogpage/>}/>
            <Route path="/about" element={<Aboutpage/>}/>
            <Route path="posts/:id" element={<Singlepage/>}/>
            <Route path="posts/:id/edit" element={<Editpost/>}/>
            <Route path="*" element={<NotfoundPage/>}/>
          </Route>
        </Routes>
      </>
  );
};

export default App;
