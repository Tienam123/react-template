import React from 'react';
import Item from './Item';

const List = ({tasks}) => {
  return (
      <ul>
        {tasks.map((item,id) => <Item key={id} {...item} />)}
      </ul>
  );
};

export default List;