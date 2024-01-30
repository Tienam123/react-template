/* Default imports */

// Code...
import {PostItemStyled} from './PostItem.styled.js';

const PostItem = ({
                    text,
                    date,
                    title,
                  }) => {

  return (
      <PostItemStyled>
        <h2 className="header">{title}</h2>
        <div className="date">{date}</div>
        <div className="text">{text.length > 10
            ? text.slice(0, 30) + '...'
            : text}</div>
      </PostItemStyled>);
};

export default PostItem;