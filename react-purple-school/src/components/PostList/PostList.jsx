/* Default imports */

// Code...
import {PostListStyled} from './PostList.styled.js';
import PostItem from '../PostItem/PostItem.jsx';

const PostList = (props) => {
  console.log('Props PostLIST', props.data);
  return (
      <PostListStyled>
        {props.data.map((el, idx) => <PostItem key={el.id}
                                               title={el.title}
                                               date={el.date}
                                               text={el.text}/>)}
      </PostListStyled>);
};
for (const postListKey in PostList) {
  console.log(postListKey);
}
export default PostList;