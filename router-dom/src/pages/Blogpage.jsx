/* Default imports */
import React, {useEffect, useState} from 'react';
import {json, Link, useLocation} from 'react-router-dom';

// Code ...
const Blogpage = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    return () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => {
            setPost(res);
          })
          .catch(error => console.error(error));
    };
  }, []);

  return (
      <div
      >
        <h1>Our News</h1>
        <ul>
          {post.map((post) => {
            return <li  key={post.id}>
              <Link style={{color: 'black'}}
                    to={`/posts/${post.id}`}>{post.title}</Link>
            </li>;
          })}
        </ul>

      </div>
  );
};

export default Blogpage;