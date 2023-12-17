/* Default imports */
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

// Code ...
const Singlepage = () => {
  const {id} = useParams();
  const [post, setPost] = useState('');
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(res => {
          setPost(res);
        });
  }, [id]);
  return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link to={`/posts/${id}/edit`} style={{display:'inline-block',marginTop:'20px',padding:'20px',backgroundColor:'teal'}}>Редактировать</Link>
        <Link onClick={goBack} style={{marginLeft:'10px',display:'inline-block',marginTop:'20px',padding:'20px',backgroundColor:'teal'}}>Назад</Link>      </div>
  );
};

export default Singlepage;
