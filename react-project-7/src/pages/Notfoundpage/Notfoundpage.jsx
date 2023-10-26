import React from 'react';
import { Link } from 'react-router-dom';
const Notfoundpage = (props) => {
  return <div>
    This page doesn't exist. Go <Link to="/">Home</Link>
  </div>;

};

export default Notfoundpage;