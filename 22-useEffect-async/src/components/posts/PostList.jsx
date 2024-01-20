import {useEffect, useState} from 'react';
import Post from './Post.jsx';
import post from './Post.module.scss';
function PostList(props)
{

  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }
  useEffect( () => {
  fetchData();

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