import React from 'react'
import MyButton from '../UI/button/MyButton.jsx'

const PostItem = (props) => {
  return (
    <li className='post'>
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={()=> props.remove(props.post)}>Удалить</MyButton>
      </div>
    </li>
  )
}

export default PostItem