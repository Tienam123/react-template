/* Default imports */
import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
// Code ...
const Editpost = () => {
  console.log(useParams());
  const {id} = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
      <>
        <h1>Редактировать пост № {id}</h1>
        <Link onClick={goBack} style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '20px',
          backgroundColor: 'teal',
        }}>Назад</Link>
      </>
  );
};

export default Editpost;
