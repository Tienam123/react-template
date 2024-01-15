import post from './Post.module.scss';

function Post(props)
{
  const {title,body,id} = props;
  return (
      <li className={post.post}>
        <h2>{title}</h2>
        <h3>{body}</h3>
      </li>
  );
}

export default Post;