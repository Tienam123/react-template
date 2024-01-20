import {useEffect, useState} from 'react';
import Post from './Post.jsx';
import post from './Post.module.scss';
function PostList(props)
{
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => setPosts(json))
          .catch(error => setError(error.message))
          .finally(() => setIsLoading(false))
  }, []);

if (error) {
  return (
      <h1>Error: {error}</h1>
  )
}

  return (
      <ul className={post.postList}>
        {isLoading ? <h1>Loading...</h1> : posts.length > 0 && posts.map((el,idx) => {
          return <Post id={el.id} body={el.body} key={idx} title={el.title}/>
        })}
      </ul>
  );
}

export default PostList;